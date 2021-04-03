import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import { createListView } from '../views/CreateListView'
// import ItemView from '../views/ItemView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import UserView from '../views/UserView.vue'
import IndexView from '../views/IndexView.vue'
import AccountsView from '../views/AccountsView.vue'
import FindView from '../views/FindView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MovieView from '../views/MovieView.vue'
import FriendsView from '../views/FriendsView.vue'
import HistoryView from '../views/HistoryView.vue'
import RecommendationsView from '../views/RecommendationsView.vue'
import SearchView from '../views/SearchView.vue'
import ChatRoomView from '../views/ChatRoomView.vue'
import AlbumView from '../views/AlbumView.vue'
import UserInfo from '../components/accounts/UserInfo.vue'
import UserPassword from '../components/accounts/UserPassword.vue'
import FriendsLists from '../components/friends/FriendsLists.vue'
import RecommendationsSetting from '../components/recommendations/RecommendationsSettings.vue'
import RecommendationsQuestionnaire from '../components/recommendations/RecommendationsQuestionnaire.vue'
import LoginHistory from '../components/history/LoginHistory.vue'
import BrowsingHistory from '../components/history/BrowsingHistory.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: IndexView },
    { path: '/login', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/chat-room', component: ChatRoomView },
    {
      path: '/accounts',
      component: AccountsView,
      children: [
        {
          path: 'user-info',
          components: {
            accountsView: UserInfo
          }
        },
        {
          path: 'user-password',
          components: {
            accountsView: UserPassword
          }
        }
      ]
    },
    { path: '/album', component: AlbumView },
    { path: '/find', component: FindView },
    {
      path: '/friends',
      component: FriendsView,
      children: [
        {
          path: 'friends-lists',
          components: {
            friendsView: FriendsLists
          }
        }
      ]
    },
    {
      path: '/history',
      component: HistoryView,
      children: [
        {
          path: 'login-history',
          components: {
            historyView: LoginHistory
          }
        },
        {
          path: 'browsing-history',
          components: {
            historyView: BrowsingHistory
          }
        }
      ]
    },
    {
      path: '/recommendations',
      component: RecommendationsView,
      children: [
        {
          path: 'settings',
          components: {
            recommendationsView: RecommendationsSetting
          }
        },
        {
          path: 'questionnaire',
          components: {
            recommendationsView: RecommendationsQuestionnaire
          }
        }
      ]
    },
    { path: '/search', component: SearchView },
    { path: '/user/:id', component: UserView },
    { path: '/movie/:id', component: MovieView },
    { path: '/*', component: NotFoundView }
  ]
})
