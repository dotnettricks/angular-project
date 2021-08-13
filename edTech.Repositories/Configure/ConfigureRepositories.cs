using edTech.Entities;
using edTech.Repositories;
using edTech.Repositories.Implementations;
using edTech.Repositories.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace edTech.Services.Configuration
{
    public static class ConfigureRepositories
    {
        public static void AddServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>((options) =>
            {
                options.UseSqlServer(configuration.GetConnectionString("DbConnection"));
            });

            services.AddIdentity<User, Role>().
                AddEntityFrameworkStores<AppDbContext>().AddDefaultTokenProviders();

            services.AddScoped<DbContext, AppDbContext>();

            services.AddTransient<IOrderRepository, OrderRepository>();
            services.AddTransient<ICartRepository, CartRepository>();

            services.AddTransient<IRepository<Course>, Repository<Course>>();
            services.AddTransient<IRepository<Category>, Repository<Category>>();
            services.AddTransient<IRepository<CourseLesson>, Repository<CourseLesson>>();
            services.AddTransient<ICartRepository, CartRepository>();
            services.AddTransient<IRepository<CartItem>, Repository<CartItem>>();
            services.AddTransient<IRepository<OrderItem>, Repository<OrderItem>>();
            services.AddTransient<IRepository<PaymentDetails>, Repository<PaymentDetails>>();
        }
    }
}
