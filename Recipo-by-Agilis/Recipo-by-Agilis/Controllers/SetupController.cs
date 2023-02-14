using System.Collections;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Recipo_by_Agilis.Models;

namespace Recipo_by_Agilis.Controllers;

[Authorize()]
[Route("api/[controller]")]
[ApiController]
public class SetupController : ControllerBase
{
    private readonly RecipoContext _context;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly ILogger<SetupController> _logger;

    public SetupController(RecipoContext context, UserManager<IdentityUser> userManager,
        RoleManager<IdentityRole> roleManager, ILogger<SetupController> logger)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _context = context;
        _logger = logger;
    }

    [HttpGet]
    public IActionResult GetAllRoles()
    {
        var roles = _roleManager.Roles.ToList();
        return Ok(roles);

    }

    [HttpPost]
    public async Task<IActionResult> CreateRole(string name)
    {
        //check if the role exists
        var roleExists = await _roleManager.RoleExistsAsync(name);

        if (!roleExists) // checks if the role exists
        {
            // check if the role has been added 
            var roleResult = await _roleManager.CreateAsync(new IdentityRole(name));

            if (roleResult.Succeeded)
            {
                _logger.LogInformation($"The Role {name} has been added successfully");
                return Ok(new { result = $"The role {name} added successfully" });
            }

            _logger.LogInformation($"The Role {name} has not been added successfully");
            return BadRequest(new { error = $"The role {name} was not added" });

        }

        return BadRequest(new { error = "Role already exists" });
    }

    [HttpGet]
    [Route("GetAllUsers")]

    public async Task<IActionResult> GetAllUsers()
    {
        var users = await _userManager.Users.ToListAsync();
        return Ok(users);
    }

    [HttpPost]
    [Route("AddUserToRole")]

    public async Task<IActionResult> AddUserToRole(RoleDto data)
    {
        //check if the user exists
        var user = await _userManager.FindByEmailAsync(data.Email);
        if (user == null)
        {
            _logger.LogInformation($"The User with {data.Email} does not exist");
            return BadRequest(new { error = "User does not exist" });
        }

        //check if role exists

        var roleExists = await _roleManager.RoleExistsAsync(data.Role);

        if (!roleExists)
        {
            _logger.LogInformation($"The Role {data.Role} does not exist");
            return BadRequest(new { error = "Role does not exist" });

        }

        var result = await _userManager.AddToRoleAsync(user, data.Role);
        if (result.Succeeded)
        {
            return Ok(new { result = "Success, user has been added to role" });
        }
        else
        {
            _logger.LogInformation($"The user was not added to a role");
            return BadRequest(new { error = "The user was not added to the role" });
        }

        //check if user is assigned to role 


    }

    [HttpGet]
    [Route("GetUserRoles")]

    public async Task<IActionResult> GetUserRolesTask(string email)
    {
        //check if email si valid
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null)
        {
            _logger.LogInformation($"The User with {email} does not exist");
            return BadRequest(new { error = "User does not exist" });
        }
        //return the roles
        var roles = await _userManager.GetRolesAsync(user);
        return Ok(roles);
    }

    [HttpPost]
    [Route("RemoveUserFromRole")]

    public async Task<IActionResult> RemoveUserFromRole(string email, string role)
    {
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null)
        {
            _logger.LogInformation($"The User with {email} does not exist");
            return BadRequest(new { error = "User does not exist" });
        }

        //check if role exists

        var roleExists = await _roleManager.RoleExistsAsync(role);

        if (!roleExists)
        {
            _logger.LogInformation($"The Role {email} does not exist");
            return BadRequest(new { error = "Role does not exist" });

        }

        var result = await _userManager.RemoveFromRoleAsync(user, role);
        if (result.Succeeded)
        {
            return Ok(new { result = $"User {email} has been removed from role{role}" });
        }

        return BadRequest(new { error = $"Unable to remove User{user} from Role{role}" });
    }

}