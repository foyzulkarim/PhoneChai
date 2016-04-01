using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace Phonechai.WebApp.Controllers
{
    [Authorize()]
    public class MyPhoneQueryController : ApiController
    {
        public IHttpActionResult Get()
        {
            var userManager = Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            string userId = User.Identity.GetUserId();
            IList<string> roles = userManager.GetRoles(userId);
            string username = "";
            if (User.IsInRole("SuperAdmin"))
            {
                // fetch and return all
                username = " I M superadmin user and name is ";
            }
            else
            {
                // fetch only user's phones
                username = " I M owner user and name is " ;
            }
            username += User.Identity.Name;
            return Ok(username);
        }
    }
}
