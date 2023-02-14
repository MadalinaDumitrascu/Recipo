using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Recipo_by_Agilis.Models;
using Recipo_by_Agilis.Services;

namespace Recipo_by_Agilis.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;
        private readonly IConfiguration _configuration;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<IdentityUser> _userManager;

        public UsersController(IUserService userService, IConfiguration configuration, RoleManager<IdentityRole> roleManager, UserManager<IdentityUser> userManager)
        {
            _userService = userService;
            _configuration = configuration;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        // /api/auth/register
        [AllowAnonymous]
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterAsync([FromBody] Register model)
        {
            if (ModelState.IsValid)
            {
                var result = await _userService.RegisterUserAsync(model);
                if (result.IsSuccess) 
                {
                   
                    return Ok(result); //status code 200 
                }
                return BadRequest(result);
            }

            return BadRequest("Some properties are not valid"); //status code 400. smth from the client side
        }

        // /api/auth/login
        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> LoginAsync([FromBody] Login model)
        {
            if (ModelState.IsValid)
            {
                var result = await _userService.LoginUserAsync(model);
                if (result.IsSuccess)
                {
                    Response.Cookies.Append("Token", result.Token, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.None, Secure = true});
                    return Ok(new
                    {
                        Message = "user created successfully"
                    });
                }
                return BadRequest(result);
            }
            
            return BadRequest(new
            {
                data = new
                {
                    Email = new List<string>{"invalid email" },
                    Password = new List<string>{"invalid password"}
                }
            });
        }
        [Authorize]
        [HttpGet("GetUser")]
        public async Task<IActionResult> GetCurrentUser()
        {
            
                var result = await _userManager.FindByNameAsync(User.Identity.Name);
                var userRole = await _userManager.GetRolesAsync(result);
                return Ok(new
                {
                    EmailAddress = result.Email,
                    Username = result.UserName,
                    Roles = userRole
                });
        }

        [HttpGet("Logout")]
        public async Task<IActionResult> LogOut()
        {
            Response.Cookies.Delete("Token", new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.None, Secure = true });
            return Ok(new
            {
                Message = "User Successfully logged out"
            });
        }

    }



}
