using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Recipo_by_Agilis.Models;

namespace Recipo_by_Agilis.Services;


public interface IUserService
{
    Task<UserManagerResponse> RegisterUserAsync(Register model);
    Task<UserManagerResponse> LoginUserAsync(Login model);

}

