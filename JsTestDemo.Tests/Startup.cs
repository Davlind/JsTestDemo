using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JsTestDemo.Tests.Startup))]
namespace JsTestDemo.Tests
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
