using edTech.Repositories.Interfaces;
using edTech.Services.Interfaces;
using System;
using System.Collections.Generic;

namespace edTech.Services.Implementations
{
    public class Service<TEntity> : IService<TEntity> where TEntity : class
    {
        protected IRepository<TEntity> _repo;
        public Service(IRepository<TEntity> repo)
        {
            _repo = repo;
        }
        public void Add(TEntity entity)
        {
            _repo.Add(entity);
        }

        public void Delete(object Id)
        {
            _repo.Delete(Id);
        }

        public TEntity Find(object Id)
        {
            return _repo.Find(Id);
        }

        public IEnumerable<TEntity> GetAll()
        {
            return _repo.GetAll();
        }

        public void Remove(TEntity entity)
        {
            _repo.Remove(entity);
        }

        public void Update(TEntity entity)
        {
            _repo.Update(entity);
        }
    }
}
