namespace Recipo_by_Agilis.Models.Stripe

{
    public record AddStripeCustomer(
        string Email,
        string Name,
        AddStripeCard CreditCard);
}