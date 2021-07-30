import {
  setupFormUserMerchant,
  storeMerchant,
  fetchMerchantItemById,
  updateMerchant,
  updatePasswordMerchant,
  fetchListMerchantByPaginate,
  fetchListMerchantTrashedByPaginate,
  trashMerchant,
  massTrashMerchant,
  restoreMerchant,
  massRestoreMerchant,
  destroyMerchant,
  massDestroyMerchant,
  emptyTrashMerchant
} from '@/api/merchant'

export default {

  setupFormUserMerchant() {
    return new Promise((resolve, reject) => {
      setupFormUserMerchant()
      .then(res => resolve(res.data))
      .catch(err => reject(err));
    });
  },

  storeMerchant({}, formData) {
    return  new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      storeMerchant(headers, formData)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
    });
  },

  updateMerchant({}, { formData, id }) {
    return new Promise((resolve, reject) => {
      const headers = {
        'Content-Type': 'multipart/form-data'
      };
      updateMerchant(headers, formData, id)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
    });
  },

  updatePasswordMerchant({}, { formData, id }) {
    return new Promise((resolve, reject) => {
      updatePasswordMerchant(formData, id)
      .then(res =>  resolve(res.data) )
      .catch(err => reject(err));
    });
  },

  fetchMerchantItemById({}, id) {
    return  new Promise((resolve, reject) => {
      fetchMerchantItemById(id)
      .then(res => resolve(res.data))
      .catch(err => reject(err));
    });
  },

  fetchListMerchantByPaginate({ commit }, query) {
    return new Promise((resolve, reject) => {
      fetchListMerchantByPaginate(query)
      .then(res => {
        commit('merchant/SET_MERCHANTS', res.data, { root: true });
        resolve(res.data);
      })
      .catch(err => reject(err));
    });
  },

  fetchListMerchantTrashedByPaginate({ commit }, query) {
    return new Promise((resolve, reject) => {
      fetchListMerchantTrashedByPaginate(query)
      .then(res => {
        commit('merchant/SET_MERCHANTS', res.data, { root: true });
        resolve(res.data);
      })
      .catch(err => reject(err));
    });
  },

  trashMerchant({ commit }, id) {
    return new Promise((resolve, reject) => {
      trashMerchant(id)
      .then(res => {
        commit('merchant/REMOVE_MERCHANT', id, { root: true });
        resolve(res.data);
      })
      .catch(err => reject(err));
    });
  },

  massTrashMerchant({ commit }, ids) {
    return new Promise((resolve, reject) => {
      massTrashMerchant(ids)
      .then(res => {
        commit('merchant/REMOVE_MERCHANTS', ids, { root: true });
        resolve(res.data);
      })
      .catch(error => reject(error));
    });
  },

  restoreMerchant({ commit }, id) {
    return new Promise((resolve, reject) => {
      restoreMerchant(id)
      .then(res => {
        commit('merchant/REMOVE_MERCHANT', id, { root: true });
        resolve(res.data);
      })
      .catch(err => reject(err));
    });
  },

  massRestoreMerchant({ commit }, ids) {
    return new Promise((resolve, reject) => {
      massRestoreMerchant(ids)
      .then(res => {
        commit('merchant/REMOVE_MERCHANTS', ids, { root: true });
        resolve(res.data);
      })
      .catch(error => reject(error));
    });
  },

  destroyMerchant({ commit }, id) {
    return new Promise((resolve, reject) => {
      destroyMerchant(id)
      .then(res => {
        commit('merchant/REMOVE_MERCHANT', id, { root: true });
        resolve(res.data);
      })
      .catch(err => reject(err));
    });
  },

  massDestroyMerchant({ commit }, ids) {
    return new Promise((resolve, reject) => {
      massDestroyMerchant(ids)
      .then(res => {
        commit('merchant/REMOVE_MERCHANTS', ids, { root: true });
        resolve(res.data);
      })
      .catch(error => reject(error));
    });
  },

  emptyTrashMerchant() {
    return new Promise((resolve, reject) => {
      emptyTrashMerchant()
      .then(res => resolve(res.data))
      .catch(error => reject(error));
    });
  }

}