
using System;

namespace Recipo_by_Agilis.Models.Stripe


{
    public record AddStripeCard(
        string Name,
        string CardNumber,
        string ExpirationYear,
        string ExpirationMonth,
        string Cvc);
}

