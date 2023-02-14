
using Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Recipo_by_Agilis.Models;


namespace Recipo_by_Agilis.Controllers;


[Route("api/[controller]")]
[ApiController]
public class AdminController: ControllerBase
{
    private UserManager<AppUser> _userManager;

    public AdminController(UserManager<AppUser> usrMgr)
    {
        _userManager = usrMgr;
    }

    //public IActionResult Index()
    //{
    //    return View();
    //}

    public ViewResult Create() => View();

    [HttpPost]
    public async Task<IActionResult> Create(User user)
    {
        if (ModelState.IsValid)
        {
            AppUser appUser = new AppUser
            {
                UserName = user.UserName,
                Email = user.Email
            };

            IdentityResult result = await userManager.CreateAsync(appUser, user.Password);

            if (result.Succeeded)
                return RedirectToAction("Index");
            else
            {
                foreach (IdentityError error in result.Errors)
                    ModelState.AddModelError("", error.Description);
            }
        }
        return View(user);
    }
}