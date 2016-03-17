using Phonechai.Model;

namespace Phonechai.Repository
{
    public abstract class BaseRepository
    {
        public BusinessDbContext Db { get; set; }

        protected BaseRepository(BusinessDbContext db)
        {
            this.Db = db;
        }
    }
}