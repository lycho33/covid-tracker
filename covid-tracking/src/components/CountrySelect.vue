<template>
    <h1>Country Selections~!</h1>
    <label for="countries">Select a Country</label>
    <select v-model="selected">

    </select>
</template>

<script>
    export default {
        name: 'CountrySelect',
        props: ['countries'],
        data(){
            return {
                selected: 0,
            }
        }
    }
</script>