using edTech.Entities;
using edTech.Repositories.Interfaces;
using edTech.Services.Interfaces;

namespace edTech.Services.Implementations
{
    public class SubscriptionService : Service<Subscription>, ISubscriptionService
    {
        private readonly ISubscriptionRepository _subscriptionRepo;
        public SubscriptionService(ISubscriptionRepository subscriptionRepo, IRepository<Subscription> subsRepo) : base(subsRepo)
        {
            _subscriptionRepo = subscriptionRepo;
        }

        public Subscription GetUserSubscription(int UserId, int CourseId)
        {
            Subscription subscription = _subscriptionRepo.GetUserSubscription(UserId, CourseId);
            return subscription;
        }

    }
}
