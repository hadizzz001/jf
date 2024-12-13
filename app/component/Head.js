"use client"

import { useState } from "react";

const Head = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu open state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <svg
                data-src="https://cdn11.bigcommerce.com/s-1g6otlwo/stencil/59095400-c1c1-013c-80e6-0210eb07f2b9/e/7d283170-74c7-013d-6dcc-46050de29e5d/img/icon-sprite.svg"
                className="icons-svg-sprite"
            />
            <header className={`header header-children ${isOpen ? "is-open" : ""}`} role="banner" style={{ position: "fixed" }}>
                <div className="header-inner" style={{ background: 'black' }}>
                    <div className="container">
                        <div className="Headerbox left-box">
                            <a
                                href="/"
                                className={`mobileMenu-toggle ${isOpen ? "is-open" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleMenu();
                                }}
                                data-mobile-menu-toggle="menu"
                            >
                                <span className="mobileMenu-toggleIcon">Toggle menu</span>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <a href="/" style={{ textDecoration: 'none' }}>
                                    <div style={{ width: '200px', height: '100px' }}>
                                        <img
                                            src="https://ucarecdn.com/f4020f98-be3d-4d27-b301-7df5bf18ee96/logo.png"
                                            alt="Jardali Food Machines- New York"
                                            title="Jardali Food Machines- New York"
                                            style={{ width: '100%', height: '60%', marginTop: "1em" }}
                                        />
                                    </div>
                                </a>
                            </div>

                            <div className={`navPages-container ${isOpen ? "is-open" : ""}`} id="menu" data-menu="" style={{ marginTop: "2em" }}>
                                <nav className="navPages" style={{ background: 'black' }}>
                                    <ul className="navPages-list">
                                        <li className="navPages-item">
                                            <a
                                                className="navPages-action menusimple has-subMenu is-close "
                                                href="/"
                                                data-collapsible="navPages-18"
                                                aria-label="Products"
                                                aria-expanded="false"
                                            >
                                                Home
                                                <i className="icon navPages-action-moreIcon">
                                                    <svg>
                                                        <use xlinkHref="#icon-chevron-down" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li className="navPages-item">
                                            <a
                                                className="navPages-action menusimple has-subMenu is-close "
                                                href="/about"
                                                data-collapsible="navPages-40"
                                                aria-label="Parts"
                                                aria-expanded="false"
                                            >
                                                About
                                                <i className="icon navPages-action-moreIcon">
                                                    <svg>
                                                        <use xlinkHref="#icon-chevron-down" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li className="navPages-item">
                                            <a
                                                className="navPages-action menusimple has-subMenu is-close "
                                                href="/machines"
                                                data-collapsible="navPages-40"
                                                aria-label="Parts"
                                                aria-expanded="false"
                                            >
                                                Machines
                                                <i className="icon navPages-action-moreIcon">
                                                    <svg>
                                                        <use xlinkHref="#icon-chevron-down" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                        <li className="navPages-item">
                                            <a
                                                className="navPages-action menusimple has-subMenu is-close "
                                                href="/contact"
                                                data-collapsible="navPages-40"
                                                aria-label="Parts"
                                                aria-expanded="false"
                                            >
                                                Contact
                                                <i className="icon navPages-action-moreIcon">
                                                    <svg>
                                                        <use xlinkHref="#icon-chevron-down" />
                                                    </svg>
                                                </i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <nav className="navUser">
                                <ul className="navUser-section navUser-section--alt">
                                    <li className="navUser-item navUser-item-quickSearch">
                                        <button
                                            className="navUser-action navUser-action--quickSearch quicksearchbox focuson"
                                            type="button"
                                            id="quick-search-expand"
                                            data-search="quickSearch"
                                            aria-controls="quickSearch"
                                            aria-label="Search"
                                        >
                                            <svg className="search-icon Headericon">
                                                <use xlinkHref="#icon-search" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="navUser-item navUser-item--account">
                                        <a
                                            className="navUser-action needsclick"
                                            href="account.php.html"
                                            data-dropdown="userAccount"
                                            aria-controls="userAccount"
                                            aria-expanded="false"
                                            alt="User Account"
                                            title="User Account"
                                        >
                                            <svg className="Headericon">
                                                <use xlinkHref="#icon-user" />
                                            </svg>
                                            <i className="icon" aria-hidden="true">
                                                <svg>
                                                    <use xlinkHref="#icon-chevron-down" />
                                                </svg>
                                            </i>
                                        </a>
                                        <ul
                                            className="dropdown-menu"
                                            id="userAccount"
                                            data-dropdown-content=""
                                            data-options="align:right"
                                            aria-hidden="true"
                                            tabIndex={-1}
                                        >
                                            <li className="navUser-item">
                                                <a
                                                    className="navUser-action needsclick"
                                                    href="login.php.html"
                                                >
                                                    <i className="icon" aria-hidden="true">
                                                        <svg>
                                                            <use xlinkHref="#icon-signout" />
                                                        </svg>
                                                    </i>
                                                    <span>Sign in</span>
                                                </a>
                                            </li>
                                            <li className="navUser-item">
                                                <a
                                                    className="navUser-action needsclick"
                                                    href="login.php@action=create_account.html"
                                                >
                                                    <i className="icon" aria-hidden="true">
                                                        <svg>
                                                            <use xlinkHref="#icon-register" />
                                                        </svg>
                                                    </i>
                                                    <span>Create an Account</span>
                                                </a>
                                            </li>
                                            <li className="navUser-item navUser-item-wishlist">
                                                <a
                                                    className="navUser-action needsclick"
                                                    href="wishlist.php.html"
                                                >
                                                    <i className="icon" aria-hidden="true">
                                                        <svg>
                                                            <use xlinkHref="#icon-wishlist" />
                                                        </svg>
                                                    </i>
                                                    <span>Wishlist</span>
                                                </a>
                                            </li>
                                            <li
                                                className="navUser-item navUser-item-compare"
                                                id="compare-link"
                                            >
                                                <a
                                                    className="navUser-action navUser-item--compare needsclick"
                                                    title="Compare"
                                                    id="compareurl"
                                                    href="compare.html"
                                                >
                                                    <i className="icon" aria-hidden="true">
                                                        <svg>
                                                            <use xlinkHref="#icon-compare" />
                                                        </svg>
                                                    </i>
                                                    <span>
                                                        Compare{" "}
                                                        <span
                                                            className="countPill countPill--positive"
                                                            id="compare-item"
                                                        />
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navUser-item currencyselectorbox"></li>
                                        </ul>
                                    </li>
                                    <li className="navUser-item navUser-item--cart">
                                        <a
                                            className="navUser-action"
                                            data-cart-preview=""
                                            data-dropdown="cart-preview-dropdown"
                                            data-options="align:right"
                                            href="cart.php@action=add&product_id=453.html"
                                            aria-label="Cart with 0 items"
                                            alt="Cart with 0 items"
                                            title=""
                                        >
                                            <span className="navUser-item-cartLabel">
                                                <svg className="cart Headericon">
                                                    <use xlinkHref="#icon-cart" />
                                                </svg>
                                            </span>
                                            <span className="countPill cart-quantity" />
                                        </a>
                                        <div
                                            className="dropdown-menu dropdownfull"
                                            id="cart-preview-dropdown"
                                            data-dropdown-content=""
                                        />
                                    </li>
                                </ul>
                            </nav>
                            <div className="headersearch-dropdownbox">
                                <div
                                    className="dropdown dropdown--quickSearch"
                                    id="quickSearch"
                                    aria-hidden="true"
                                    data-prevent-quick-search-close=""
                                >
                                    <div className="searchboxmain">
                                        <form
                                            className="form"
                                            action="https://www.spinninggrillers.com/search.php"
                                            id="mobileQuickSearchForm"
                                        >
                                            <fieldset className="form-fieldset">
                                                <div className="form-field">
                                                    <label className="is-srOnly" htmlFor="search_query">
                                                        Search
                                                    </label>
                                                    <input
                                                        className="form-input"
                                                        data-search-quick=""
                                                        name="search_query"
                                                        id="search_query"
                                                        data-error-message="Search field cannot be empty."
                                                        placeholder="Search the store"
                                                        autoComplete="off"
                                                    />
                                                    <span
                                                        className="search-icon-main"
                                                        onclick="document.getElementById('mobileQuickSearchForm').submit();"
                                                    >
                                                        <svg className="search-icon Headericon">
                                                            <use xlinkHref="#icon-search" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </fieldset>
                                        </form>
                                        <section
                                            className="quickSearchResults"
                                            data-bind="html: results"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Head