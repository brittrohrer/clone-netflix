<script setup>
import {showsList,tvactionList, tvthrillerList,tvcomedyList , tvrealityList } from '../public/js/project-data.js';
</script>

<template>
    <div class="section">
        <section class="feature">
            <img :src="showsList[1].featurepic" class="feature__img">
            <div class="feature__text-container">
                <h2 class="feature__title">{{ showsList[1].title }}</h2>
                <p class="feature__description">{{ showsList[1].description }}</p>
                <div class="feature__buttons-section">
                    <div class="feature__button-container feature__button-container--play">
                        <i class="fa-solid fa-play feature__icon feature__icon--play"></i>
                        <p class="feature__icon-text feature__icon-text--play">Play</p>
                    </div>
                    <div class="feature__button-container feature__button-container--info">
                        <i class="fa-solid fa-info feature__icon feature__icon--info"></i>
                        <p class="feature__icon-text feature__icon-text--info">More Info</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="section__container">
            <div class="section__header">
                <h3 class="section__title">TV Shows</h3>
            </div>
            <section class="user-home-page-section">
                <h4 class="section__title">Action</h4>
                <ul class="video-list">
                    <li class="video-list-item"
                        v-for="video in tvactionList"
                        :key="video.title">
                        <VideoCard 
                        :thumbnail="video.thumbnail"
                        :rating="video.rating"
                        :time="video.time"
                        :seasons="video.seasons"
                        :genre="video.genre"
                        />
                    </li>
                </ul>
            </section>
            <section class="user-home-page-section">
                <h4 class="section__title">Thriller</h4>
                <ul class="video-list">
                    <li class="video-list-item"
                        v-for="video in tvthrillerList"
                        :key="video.title">
                        <VideoCard 
                        :thumbnail="video.thumbnail"
                        :rating="video.rating"
                        :time="video.time"
                        :seasons="video.seasons"
                        :genre="video.genre"
                        />
                    </li>
                </ul>
            </section>
            <section class="user-home-page-section">
                <h4 class="section__title">Comedy</h4>
                <ul class="video-list">
                    <li class="video-list-item"
                        v-for="video in tvcomedyList"
                        :key="video.title">
                        <VideoCard 
                        :thumbnail="video.thumbnail"
                        :rating="video.rating"
                        :time="video.time"
                        :seasons="video.seasons"
                        :genre="video.genre"
                        />
                    </li>
                </ul>
            </section>
            <section class="user-home-page-section">
                <h4 class="section__title">Reality</h4>
                <ul class="video-list">
                    <li class="video-list-item"
                        v-for="video in tvrealityList"
                        :key="video.title">
                        <VideoCard 
                        :thumbnail="video.thumbnail"
                        :rating="video.rating"
                        :time="video.time"
                        :seasons="video.seasons"
                        :genre="video.genre"
                        />
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>