using Microsoft.EntityFrameworkCore;

namespace Recipo_by_Agilis.Models;

public class UserSubscription
{
    public int Id { get; set; }
   
    public int UserId { get; set; }
    public int SubscriptionId { get; set; }
}