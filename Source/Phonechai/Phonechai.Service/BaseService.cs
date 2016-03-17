using Phonechai.Model;

namespace Phonechai.Service
{
    public class BaseService
    {
        protected BusinessDbContext DbContext;

        public BaseService(BusinessDbContext db)
        {
            DbContext = db;
        }
    }
}