<script setup>
import {ref} from "vue";
import {users} from "../public/js/profiles.js"

/* use variable that can be changed and create web content dynamically */
const brand =ref(`Netflix`);

</script>
<template>
    <nav class="user-nav">
        <div class="user-nav__container">
            <NuxtLink class="user-nav__brand" to="/">{{ brand }}</NuxtLink>
            <ul class="user-nav__list">
                <li class="user-nav__item">
                    <NuxtLink class="user-nav__link" to="/user">Home</NuxtLink>
                </li>
                <li class="user-nav__item">
                    <NuxtLink class="user-nav__link" to="/shows">TV Shows</NuxtLink>
                </li>
                <li class="user-nav__item">
                    <NuxtLink class="user-nav__link" to="/movies">Movies</NuxtLink>
                </li>
                <li class="user-nav__item">
                    <NuxtLink class="user-nav__link" to="/new">New and Popular</NuxtLink>
                </li>
                <li class="user-nav__item">
                    <NuxtLink class="user-nav__link" to="/mylist">My list</NuxtLink>
                </li>
                <li class="user-nav__item">
                    <NuxtLink class="user-nav__link" to="/user">Browse By Languages</NuxtLink>
                </li>
            </ul>
        </div> 
        <div class="user-nav__tools-container">
            <i class="fa-solid fa-magnifying-glass user-nav__icon"></i>
            <a class="user-nav__tool-link" href="#">Kids</a>
            <i class="fa-regular fa-bell user-nav__icon"></i>
            <div class="user-nav__profile-container">
                <i :class="users[0].pic" class="user-nav__pic"></i>
                <i class="fa-solid fa-caret-down user-nav__icon"></i>
            </div>
        </div>  
    </nav>
</template>
<style scoped>
</style>