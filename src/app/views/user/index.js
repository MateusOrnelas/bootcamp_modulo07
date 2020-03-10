{% extends "layout.njk" %}

{% block content %}

<section class="user-dashboard container form">
    <form method="POST" action="/users?_method=PUT">

        <div class="header">
            <h3>Detalhes</h3>
        </div>

        
        <div class="fields">
            {% include 'user/fields.njk' %}
            <input 
                type="hidden" 
                name="id"
                value={{user.id}}>
        </div>

        <button class="button edit" type="submit">Atualizar</button>
    </form>

     <form id="form-delete" action="/users?_method=DELETE" method="post">
        <input type="hidden" name="id" value={{user.id}}>
        <button class="button delete" type="submit">Deletar</button>
    </form>
</section>

<script> 
    const formDelete = document.querySelector("#form-delete")
    formDelete.addEventListener("submit", function(event) {
        const confirmation = confirm("Tem certeza que deseja excluir sua conta? Essa operação não poderá ser desfeita")
        if(!confirmation) {
            event.preventDefault()
        }
    })
</script>
{% endblock content %}