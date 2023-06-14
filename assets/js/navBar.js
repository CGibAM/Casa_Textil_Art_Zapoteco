const navBar = document.getElementById("navBar");

navBar.innerHTML = `
<div class="container-fluid nav-brd fnt promo-top sticky-top stcky">
        <div class="row text-center">

            <div class="col-11">
                <a href="" class="promo-link" id="promo"></a>
            </div>

            <div class="col-1 text-end">
                <button type="button" class="btn btn-sm nav-btn-cross">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.8137 1.08634C14.0621 0.837827 14.0621 0.434907 13.8137 0.186394C13.5651 -0.0621314 13.1622 -0.0621314 12.9136 0.186394L7 6.10004L1.08634 0.186394C0.837827 -0.0621314 0.434907 -0.0621314 0.186394 0.186394C-0.0621314 0.434907 -0.0621314 0.837827 0.186394 1.08634L6.10004 7L0.186394 12.9136C-0.0621314 13.1622 -0.0621314 13.5651 0.186394 13.8137C0.434907 14.0621 0.837827 14.0621 1.08634 13.8137L7 7.89996L12.9136 13.8137C13.1622 14.0621 13.5651 14.0621 13.8137 13.8137C14.0621 13.5651 14.0621 13.1622 13.8137 12.9136L7.89996 7L13.8137 1.08634Z"
                            fill="black" />
                    </svg>

                </button>
            </div>

        </div>
    </div>

    <!-- Aqui terminan las promos -->


    <!-- Aqui inicia el nav-bar -->
    <div class="container-fluid fnt sticky-top stcky-blw bg-body nav-bar nav-brd">

        <!--Aquí inicia el navbar-superior-->
        <div class="row align-items-center">

            <div class="col-4 d-lg-none">
                <button id="float-button" class="btn togg-btn bg-body div-float-shower" type="button">
                    <svg width="30" height="30" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.8729 4.70825H1.12708C0.711719 4.70825 0.375 5.04497 0.375 5.46034V5.5395C0.375 5.95487 0.711719 6.29159 1.12708 6.29159H13.8729C14.2883 6.29159 14.625 5.95487 14.625 5.5395V5.46034C14.625 5.04497 14.2883 4.70825 13.8729 4.70825Z"
                            fill="#5E412F" />
                        <path
                            d="M13.8729 8.66699H1.12708C0.711719 8.66699 0.375 9.00371 0.375 9.41908V9.49824C0.375 9.91361 0.711719 10.2503 1.12708 10.2503H13.8729C14.2883 10.2503 14.625 9.91361 14.625 9.49824V9.41908C14.625 9.00371 14.2883 8.66699 13.8729 8.66699Z"
                            fill="#5E412F" />
                        <path
                            d="M13.8729 0.75H1.12708C0.711719 0.75 0.375 1.08672 0.375 1.50208V1.58125C0.375 1.99661 0.711719 2.33333 1.12708 2.33333H13.8729C14.2883 2.33333 14.625 1.99661 14.625 1.58125V1.50208C14.625 1.08672 14.2883 0.75 13.8729 0.75Z"
                            fill="#5E412F" />
                    </svg>
                </button>
            </div>


            <div class="col-4 d-lg-block d-none">
                <ul class="navbar-nav fnt-elements navbar-dir">
                    <li class="nav-item navbar-dir-store">
                        <a class="nav-link active" href="#">Tienda</a>
                    </li>
                    <li class="nav-item navbar-dir-about">
                        <a class="nav-link active" aria-current="page" href="acercaDeNosotros.html"><span>Quienes somos</span></a>
                    </li>
                    <li class="nav-item navbar-dir-contact">
                        <a class="nav-link active" href="#">Contacto</a>
                    </li>
                </ul>
            </div>


            <!-- Aqui inicia el logo en el nav-bar -->
            <div class="col-4 d-flex justify-content-center">

                <div class="logo">
                    <div class="d-none d-sm-block logo-img">
                        <img class="icon-size icon" src="./assets/icons/logo.jpg"></img>
                    </div>
                    <div class="text-logo">
                        <p class="up-text fnt-t">Arte Zapoteco</p>
                        <p class="down-text fnt-sub">CASA TEXTIL</p>
                    </div>

                </div>
            </div>

            <!-- Aqui termina el logo en el nav-bar -->

            <!-- Aqui inician los iconos derechos -->

            <div id="rgt-icons" class="nav-icons col-4">
                <div class="d-flex justify-content-end rgt-elements">

                    <form class="d-none d-xl-flex" role="search">
                        <div class="input-group form-control">
                            <input type="text" class="form-brd fnt-input inpt-elem" placeholder="Buscar..."
                                aria-label="Username" aria-describedby="basic-addon1">
                            <span class="input-group-text border-white nav-form-span">
                                <button class="btn-search btn bg-white nav-form-btn" type="button">

                                    <svg class="nav-form-svg" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18 16.4423L12.6312 11.0726C13.4964 9.88361 13.9618 8.45066 13.9604 6.98019C13.9604 3.13139 10.829 0 6.98019 0C3.13139 0 0 3.13139 0 6.98019C0 10.829 3.13139 13.9604 6.98019 13.9604C8.45066 13.9618 9.88361 13.4964 11.0726 12.6312L16.4423 18L18 16.4423ZM6.98019 11.7558C6.03554 11.7559 5.11208 11.4759 4.32659 10.9511C3.54111 10.4263 2.92888 9.68041 2.56734 8.80768C2.2058 7.93495 2.11118 6.97461 2.29545 6.0481C2.47972 5.1216 2.93461 4.27055 3.60258 3.60258C4.27055 2.93461 5.1216 2.47972 6.0481 2.29545C6.97461 2.11118 7.93495 2.2058 8.80768 2.56734C9.68041 2.92888 10.4263 3.54111 10.9511 4.32659C11.4759 5.11208 11.7559 6.03554 11.7558 6.98019C11.7543 8.24631 11.2507 9.46014 10.3554 10.3554C9.46014 11.2507 8.24631 11.7543 6.98019 11.7558Z"
                                            fill="black" fill-opacity="0.3" />
                                    </svg>
                                </button>
                            </span>

                        </div>
                    </form>

                    <div class="group-icons">

                        <a id="float-button2" class="d-xl-none search btn nav-search-link div-float-shower"
                            type="button">
                            <svg class="search-icon" width="27" height="27" viewBox="0 0 35 35" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.5833 24.7917C20.2212 24.7917 24.7917 20.2212 24.7917 14.5833C24.7917 8.94543 20.2212 4.375 14.5833 4.375C8.94543 4.375 4.375 8.94543 4.375 14.5833C4.375 20.2212 8.94543 24.7917 14.5833 24.7917Z"
                                    stroke="#5E412F" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M31.8156 31.8155L21.8733 21.8733" stroke="#5E412F" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>

                        <a href="https://www.google.com.mx/" class="shop">
                            <svg class="nav-shop-icon" width="27" height="27" viewBox="0 0 27 27" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 9.75001C1 8.36929 2.24365 7.25 3.77778 7.25H23.2222C24.7564 7.25 26 8.36929 26 9.75001V23.5001C26 24.8808 24.7564 26.0001 23.2222 26.0001H3.77778C2.24365 26.0001 1 24.8808 1 23.5001V9.75001Z"
                                    stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M1 9.75001C1 8.36929 2.24365 7.25 3.77778 7.25H23.2222C24.7564 7.25 26 8.36929 26 9.75001V23.5001C26 24.8808 24.7564 26.0001 23.2222 26.0001H3.77778C2.24365 26.0001 1 24.8808 1 23.5001V9.75001Z"
                                    stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M7.94434 11V6.00002C7.94434 3.23858 10.4316 1 13.4999 1C16.5681 1 19.0554 3.23858 19.0554 6.00002V10.611"
                                    stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a>

                        <a href="" class="user">
                            <svg class="nav-user-icon" width="27" height="27" viewBox="0 0 27 27" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1 26V24.4375C1 18.3969 6.59645 13.5 13.5 13.5C20.4036 13.5 26 18.3969 26 24.4375V26"
                                    stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M13.4998 13.5C17.4446 13.5 20.6426 10.7017 20.6426 7.25C20.6426 3.79822 17.4446 1 13.4998 1C9.5549 1 6.35693 3.79822 6.35693 7.25C6.35693 10.7017 9.5549 13.5 13.4998 13.5Z"
                                    stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></a>


                        <div class="collapse navbar-collapse nav-language" id="navbarDropdown">

                            <ul class="navbar-nav nav-language-list">

                                <li class="nav-item dropdown nav-language-dropdown">

                                    <svg class="nav-language-icon" width="27" height="27" viewBox="0 0 27 27"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" class="nav-link dropdown-toggle"
                                        id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"
                                        role="button">
                                        <path
                                            d="M1 13.5C1 20.4035 6.59644 26 13.5 26C20.4035 26 26 20.4035 26 13.5C26 6.59644 20.4035 1 13.5 1C6.59644 1 1 6.59644 1 13.5Z"
                                            stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M14.75 1.06152C14.75 1.06152 18.5 5.9998 18.5 13.4997C18.5 20.9997 14.75 25.9381 14.75 25.9381"
                                            stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M12.25 25.9381C12.25 25.9381 8.5 20.9997 8.5 13.4997C8.5 5.9998 12.25 1.06152 12.25 1.06152"
                                            stroke="#5E412F" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.78711 17.875H25.2131" stroke="#5E412F" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M1.78711 9.125H25.2131" stroke="#5E412F" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <ul class="dropdown-menu dropdown-menu-end nav-language-dropdown-list"
                                        aria-labelledby="navbarDarkDropdownMenuLink">
                                        <li><a class="dropdown-item" href="#">Español</a></li>
                                        <li><a class="dropdown-item" href="#">Inglés</a></li>
                                    </ul>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
            <!-- Aqui terminan los inconos derechos -->

        </div>
        <!--Fin del navbar superior-->

        <!-- Inicio de la Barra lateral -->

        <div class="nav-external-element d-none" id="external">

            <div class="external-logo d-flex justify-content-center float-logo">
                <button class="btn bg-white float-logo-btn" type="button">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H17V15.3652H0V0Z" fill="white" fill-opacity="0.01" />
                        <path d="M2.8335 2.56079L14.1668 12.8043" stroke="black" stroke-width="4.48549"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M2.8335 12.8043L14.1668 2.56079" stroke="black" stroke-width="4.48549"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
                <img class="icon-size icon" src="./assets/icons/logo.jpg" alt="">
            </div>

            <form class="d-flex ms-auto search" role="search">
                <div class="input-group form-control float-search">
                    <input type="text" class="form-brd fnt-input float-search-input" placeholder="Buscar..."
                        aria-label="Username" aria-describedby="basic-addon1">
                    <span class="input-group-text border-white float-search-span">
                        <button class="btn bg-white float-search-btn" type="button">
                            <svg class="float-search-svg" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 16.4423L12.6312 11.0726C13.4964 9.88361 13.9618 8.45066 13.9604 6.98019C13.9604 3.13139 10.829 0 6.98019 0C3.13139 0 0 3.13139 0 6.98019C0 10.829 3.13139 13.9604 6.98019 13.9604C8.45066 13.9618 9.88361 13.4964 11.0726 12.6312L16.4423 18L18 16.4423ZM6.98019 11.7558C6.03554 11.7559 5.11208 11.4759 4.32659 10.9511C3.54111 10.4263 2.92888 9.68041 2.56734 8.80768C2.2058 7.93495 2.11118 6.97461 2.29545 6.0481C2.47972 5.1216 2.93461 4.27055 3.60258 3.60258C4.27055 2.93461 5.1216 2.47972 6.0481 2.29545C6.97461 2.11118 7.93495 2.2058 8.80768 2.56734C9.68041 2.92888 10.4263 3.54111 10.9511 4.32659C11.4759 5.11208 11.7559 6.03554 11.7558 6.98019C11.7543 8.24631 11.2507 9.46014 10.3554 10.3554C9.46014 11.2507 8.24631 11.7543 6.98019 11.7558Z"
                                    fill="black" fill-opacity="0.3" />
                            </svg>
                        </button>
                    </span>

                </div>
            </form>

            <div class="upper-external">
                <ul class="navbar-nav external">
                    <div>
                        <li class="nav-item">
                            <a class="float-store-app" href="">
                                <button class="btn bg-white float-elements-menu" type="button">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7.52564 0.64277C7.5256 0.391773 7.3221 0.188268 7.0711 0.188229C6.82003 0.188249 6.61652 0.391767 6.6165 0.642834L6.61652 6.6165L0.642827 6.6165C0.391785 6.6165 0.18828 6.82 0.188286 7.07104C0.18828 7.32209 0.391785 7.52559 0.642827 7.52559L6.61652 7.52559L6.6165 13.4993C6.61652 13.7503 6.82003 13.9538 7.0711 13.9539C7.3221 13.9538 7.5256 13.7503 7.52564 13.4993L7.52562 7.52559L13.4993 7.52565C13.7503 7.52559 13.9539 7.32207 13.9539 7.07104C13.9539 6.82002 13.7503 6.6165 13.4993 6.61644L7.52562 6.6165L7.52564 0.64277Z"
                                            fill="black" />
                                    </svg>
                                </button>
                            </a>
                            <a class="nav-link active" href="#">Tienda</a>
                        </li>
                    </div>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Acerca de nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Contáctanos</a>
                    </li>
                </ul>
            </div>

            <div class="bottom-external">
                <ul class="navbar-nav external bottom">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Mi cuenta</a>
                    </li>
                    <li class="nav-item spanish">
                        <a class="nav-link active" aria-current="page" href="#">Español</a>
                    </li>
                    <li class="nav-item english d-none">
                        <a class="nav-link active" aria-current="page" href="#">English</a>
                    </li>
            </div>
        </div>
        <!-- Fin de la barra lateral -->

    </div>
    <!-- Aui termina el nav-bar -->


    
`