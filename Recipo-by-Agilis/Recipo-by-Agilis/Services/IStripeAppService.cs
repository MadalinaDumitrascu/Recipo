using Recipo_by_Agilis.Models.Stripe;

namespace Recipo_by_Agilis.Services;

public interface IStripeAppService
{
    Task<StripeCustomer> AddStripeCustomerAsync(AddStripeCustomer customer, CancellationToken ct);
    Task<StripePayment> AddStripePaymentAsync(AddStripePayment payment, CancellationToken ct);
}