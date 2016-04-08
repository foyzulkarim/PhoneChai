using System.Data.Entity;
using System.IO;
using System.Linq;
using Phonechai.Model;

namespace Phonechai.Repository
{
    public abstract class BaseRepository<T> where T : Entity 
    {
        public BusinessDbContext Db { get; set; }

        protected BaseRepository(BusinessDbContext db)
        {
            this.Db = db;
        }

        public bool Add(T entity)
        {
            DbSet<T> dbSet = Db.Set<T>();
            T add = dbSet.Add(entity);
            Db.SaveChanges();
            return true;
        }
    }

}