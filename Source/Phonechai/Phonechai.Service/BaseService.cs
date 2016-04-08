using Phonechai.Model;
using Phonechai.Repository;

namespace Phonechai.Service
{
    public class BaseService<T> where T : Entity
    {
        private BaseRepository<T> repository;         

        protected BaseService(BaseRepository<T> repository)
        {
            this.repository = repository;
        }

        public bool Add(T entity)
        {             
            return repository.Add(entity);
        }
    }
}