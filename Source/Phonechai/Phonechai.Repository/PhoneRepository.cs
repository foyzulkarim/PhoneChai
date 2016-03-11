using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phonechai.Model;
using Phonechai.ViewModel;

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

    public class PhoneRepository: BaseRepository
    {
        public PhoneRepository(BusinessDbContext db) : base(db)
        {
        }

        public IQueryable<Phone> GetAll()
        {
            return Db.Phones.AsQueryable();
        }
    }
}
