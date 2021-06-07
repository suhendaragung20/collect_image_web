<template>
    <div>
        <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
        <div class="row">
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Insert Image</h5>
                        <form class="">
                            <div class="position-relative form-group"><input name="file"
                                                                                                         id="exampleFile"
                                                                                                         type="file"
                                                                                                         class="form-control-file">
                                <small class="form-text text-muted">max size 5mb.
                                </small>
                            </div>
                            <button class="mt-1 btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="main-card mb-3 card">
                    <div class="card-body"><h5 class="card-title">Label</h5>
                        <form class=""><input placeholder="type here..." type="text"
                                              class="mb-2 form-control-lg form-control">
                            </form>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>

    import PageTitle from "../../Layout/Components/PageTitle.vue";

    export default {
        components: {
            PageTitle,

        },
        data: () => ({
            heading: 'Add Data Image',
            subheading: 'Data image yang diambil melalui kamera smartphone.',
            icon: 'pe-7s-cloud-upload icon-gradient bg-premium-dark',


        }),


    }
</script>
