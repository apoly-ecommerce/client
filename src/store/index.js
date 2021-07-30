import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import app from './modules/app';
import auth from './modules/auth';
import user from './modules/user';
import country from './modules/country';
import module from './modules/module';
import state from './modules/state';
import role from './modules/role';
import categoryGroup from './modules/categoryGroup';
import categorySubGroup from './modules/categorySubGroup';
import category from './modules/category';
import manufacturer from './modules/manufacturer';
import product from './modules/product';
import address from './modules/address';
import customer from './modules/customer';
import shop from './modules/shop';
import merchant from './modules/merchant';
import banner from './modules/banner';
import slider from './modules/slider';
import theme from './modules/theme';
import system from './modules/system';
import faq from './modules/faq';
import inventory from './modules/inventory';
import config from './modules/config';
import account from './modules/account';
import systemConfig from './modules/systemConfig';
import notification from './modules/notification';
import message from './modules/message';

const store = new Vuex.Store({
  modules: {
    app,
    auth,
    user,
    module,
    country,
    state,
    role,
    categoryGroup,
    categorySubGroup,
    category,
    manufacturer,
    product,
    address,
    customer,
    shop,
    merchant,
    banner,
    slider,
    theme,
    system,
    faq,
    inventory,
    config,
    account,
    systemConfig,
    notification,
    message
  }
});

export default store;