using System;
using Grpc.Core;
using Microsoft.AspNetCore.Mvc;

using Recipo_by_Agilis.Models.Stripe;
using Recipo_by_Agilis.Services;
 



namespace Recipo_by_Agilis.Controllers;


[Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
public class StripeContoller: ControllerBase
{
    private readonly IStripeAppService _stripeService;

    public StripeContoller(IStripeAppService stripeService)
    {
        _stripeService = stripeService;
    }
  

    [HttpPost("customer/add")]
    public async Task<ActionResult<StripeCustomer>> AddStripeCustomer(
        [FromBody] AddStripeCustomer customer,
        CancellationToken ct)
    {
        
        StripeCustomer createdCustomer = await _stripeService.AddStripeCustomerAsync(
            customer,
            ct);

        return StatusCode(StatusCodes.Status200OK, createdCustomer);
    }

    [HttpPost("payment/add")]
    public async Task<ActionResult<StripePayment>> AddStripePayment(
        [FromBody] AddStripePayment payment,
        CancellationToken ct)
    {
        StripePayment createdPayment = await _stripeService.AddStripePaymentAsync(
            payment,
            ct);

        return StatusCode(StatusCodes.Status200OK, createdPayment);
    }
}