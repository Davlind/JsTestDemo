using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JsTestDemo.Jasmine.Tests.Startup))]
namespace JsTestDemo.Jasmine.Tests
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
