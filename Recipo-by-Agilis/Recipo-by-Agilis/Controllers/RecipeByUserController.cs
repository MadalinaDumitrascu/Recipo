using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Recipo_by_Agilis.Models;

namespace Recipo_by_Agilis.Controllers;


    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeByUserController : ControllerBase
    {
        private readonly RecipoContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public RecipeByUserController(RecipoContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

    }