<template>
    <select v-model="selected" class="form-select mt-10 blockw-full border p-3 rounded">
        <option value="0">Select Country</option>
        <option v-for="country in countries" :value="country.ID"></option>
    </select>
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