using edTech.Entities;
using edTech.Services.Implementations;
using edTech.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace edTech.APIs.Configuration
{
    public static class ConfigureDependencies
    {
        public static void AddServices(IServiceCollection services)
        {
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<IService<Course>, Service<Course>>();
            services.AddScoped<IService<CourseTopic>, Service<CourseTopic>>();
            services.AddScoped<IService<CourseLesson>, Service<CourseLesson>>();
            services.AddScoped<ICartService, CartService>();
            services.AddScoped<IOrderService, OrderService>();
            services.AddScoped<IPaymentService, PaymentService>();
        }
    }
}
