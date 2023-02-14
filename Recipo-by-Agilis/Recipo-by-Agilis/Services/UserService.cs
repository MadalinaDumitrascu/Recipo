using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Recipo_by_Agilis.Models;
using IdentityUser = Microsoft.AspNetCore.Identity.IdentityUser;

namespace Recipo_by_Agilis.Services;

public class UserService : IUserService
{
    private UserManager<IdentityUser> _userManager;
    private IConfiguration _configuration;
    private RoleManager<IdentityRole> _roleManager;


    public UserService(UserManager<IdentityUser> usermanager, IConfiguration configuration, RoleManager<IdentityRole> roleManager)
    {
        _userManager = usermanager;
        _configuration = configuration;
        _roleManager = roleManager;
    }

    public async Task<UserManagerResponse> RegisterUserAsync(Register model)
    {
        
        if (model == null)
            throw new NullReferenceException("register model is null");

        var userExists = await _userManager.FindByEmailAsync(model.Email);
        if (userExists != null) return new UserManagerResponse{Message = "user already exists", IsSuccess = false , Errors = new {Email = "already exists"}};
        userExists = await _userManager.FindByNameAsync(model.UserName);
        if (userExists != null) return new UserManagerResponse { Message = "user already exists", IsSuccess = false, Errors = new { UserName = "already exists" } };
        

        if (model.Password != model.ConfirmPassword)
            return new UserManagerResponse() { Message = "Passwords don't match",Errors = new {ConfirmPassword = new List<string> {"Passwords don't match"} }, IsSuccess = false };

        var newUser = new IdentityUser { Email = model.Email, UserName = model.UserName };
        var result = await _userManager.CreateAsync(newUser, model.Password);
        
        if (result.Succeeded)
        {
            var resultRoleAddition = await _userManager.AddToRoleAsync(newUser, "FreeUser");

            return new UserManagerResponse { Message = "User created.", IsSuccess = true };
        }
        return new UserManagerResponse
        {
            Message = "Failed to create user",
            IsSuccess = false,
            Errors = new{Password = result.Errors.Select(e => e.Description)}
        };


        //    //TO do: send a confirmation email
       

    }

    public async Task<UserManagerResponse> LoginUserAsync(Login model)
    {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user == null)
        {
            
            return new UserManagerResponse()
            {
                Message = "No user is registered with this email.",
                Errors = new
                {
                    Email = new List<string>(){"No user is registered with this email."},
                    Password = new List<string>(){"Invaild Password"}
                },
                IsSuccess = false,
            };
        }

        var result = await _userManager.CheckPasswordAsync(user, model.Password);
        
        if (!result)
            return new UserManagerResponse()
            {
                Message = "Invalid password.",
                Errors = new {Password = "Invalid Password"},
                IsSuccess = false,
            };
        var userRoles = await _userManager.GetRolesAsync(user);

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.UserName),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        foreach (var userRole in userRoles)
        {
            claims.Add(new Claim(ClaimTypes.Role, userRole));
        }

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["AuthSettings:Key"]));

        var token = new JwtSecurityToken(
            issuer:null,
            audience: null,
            claims: claims,
            expires: DateTime.Now.AddDays(30),
            signingCredentials: new SigningCredentials(key,SecurityAlgorithms.HmacSha256));
       
        var jwthandler = new JwtSecurityTokenHandler();
        string tokenAsString = jwthandler.WriteToken(token);

        return new UserManagerResponse()
        {
            Message = "Successfully logged in",
            IsSuccess = true,
            User = user,
            Token = tokenAsString
        };
    }

}