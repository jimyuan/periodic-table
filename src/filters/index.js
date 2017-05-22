/**
 * 此处须把所有过滤器全局化
 */
import Vue from 'vue'
import massFormatter from './massFormatter'
import ecFormatter from './ecFormatter'

Vue.filter('massFormatter', massFormatter)
Vue.filter('ecFormatter', ecFormatter)
