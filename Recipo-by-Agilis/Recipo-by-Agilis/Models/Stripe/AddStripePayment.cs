namespace Recipo_by_Agilis.Models.Stripe

{
    public record AddStripePayment(
        string CustomerId,
        string ReceiptEmail,
        string Description,
        string Currency,
        long Amount);
}