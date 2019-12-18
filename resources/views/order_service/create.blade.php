@extends('layouts.layout')

@section('breadcrumbs')
    <div class="mb15">
        <ul class="page-breadcrumb breadcrumb">
            <li><a href="{{ route('dashboard') }}">Dashboard</a><i class="fa fa-angle-right"></i></li>
            <li><a href="{{ route('order_service_list') }}">Order Services</a><i class="fa fa-angle-right"></i></li>
            <li><span>Add New</span></li>
        </ul>
    </div>
@stop

@section('content')
    <section id="content" class="animated fadeIn list-items admin-form">
        <div class="row">
            <div class="col-md-9 center-block">
                @include('errors._list')
                <div class="admin-form theme-primary">
                    <div class="panel">
                        {!! Form::open(['url' => route('order_service_store'), 'id' => 'createForm']) !!}
                            @include('order_service._form', ['formTitle' => 'New Proposal', 'submitButtonText' => 'Create Proposal', 'create' => true])
                        {!! Form::close() !!}
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop

@section('js-files')
    <script>
        $(function(){
            $( "#createForm" ).validate({
                rules: {
                    name: {
                        required : true,
                        slug     : true,
                        minlength: 3
                    }
                }
            });

            $('#cancel-button').click(function(ev){
                ev.preventDefault();
                window.location = "{{ route('order_service_list') }}";
            });
        });
    </script>
@stop