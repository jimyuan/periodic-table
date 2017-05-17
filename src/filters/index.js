/**
 * 此处须把所有过滤器全局化
 */
import Vue from 'vue'
import massFormatter from './massFormatter'

Vue.filter('massFormatter', massFormatter)
