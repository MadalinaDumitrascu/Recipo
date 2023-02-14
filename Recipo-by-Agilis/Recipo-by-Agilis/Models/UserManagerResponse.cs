using Microsoft.AspNetCore.Identity;

namespace Recipo_by_Agilis.Models;

public class UserManagerResponse
{
    public string Message { get; set; }
    public bool IsSuccess { get; set; }

    public object Errors { get; set; }

    public DateTime? ExpireDate { get; set; }

    public IdentityUser User { get; set; }
    public string Token { get; set; }
}