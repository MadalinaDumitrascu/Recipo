namespace Recipo_by_Agilis.Models.Stripe

{
    public record StripePayment(
        string CustomerId,
        string ReceiptEmail,
        string Description,
        string Currency,
        long Amount,
        string PaymentId);
}