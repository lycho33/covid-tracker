<template>
    <select v-model="selected"></select>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: ['countries'],
    data(){
        return{
            selected: 0
        }
    }
}
</script>