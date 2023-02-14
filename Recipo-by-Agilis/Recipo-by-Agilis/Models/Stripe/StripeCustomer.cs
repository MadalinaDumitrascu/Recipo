namespace Recipo_by_Agilis.Models.Stripe

{
    public record StripeCustomer(
        string Name,
        string Email,
        string CustomerId);
}
