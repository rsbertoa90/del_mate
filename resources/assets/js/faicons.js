import {
    library
} from '@fortawesome/fontawesome-svg-core';

   import {
       FontAwesomeIcon
   } from '@fortawesome/vue-fontawesome';

import {
    faFacebook,
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

import {
    faPlus,
    faMinus,
    faHeart,
    faSignOutAlt,
    faUserCog,
    faBars,
    faSearch,
    faClock,
    faDollarSign,
    faPauseCircle,
    faPlay,
    faTrash,
    faChevronLeft,
    faChevronRight,
    faShoppingCart, 
    faPhone, 
    faDownload, 
    faTruck, 
    faBuilding,
    faHome,
    faArrowDown,
    faTimes
} from '@fortawesome/free-solid-svg-icons'


library.add(faPauseCircle,
            faPlus,
            faMinus,
            faHeart,
            faSignOutAlt,
            faUserCog,
            faSearch,
            faBars,
            faClock,
            faDollarSign,
            faPlay,
            faTrash,
            faShoppingCart,
            faChevronLeft,
            faChevronRight,
            faPhone,
            faDownload,
            faHome,
            faTruck,
            faBuilding,
            faWhatsapp,
            faInstagram,
            faFacebook,
            faArrowDown,
            faTimes )

Vue.component('fa-icon', FontAwesomeIcon );