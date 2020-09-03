<script>
    export let entry = {
        title: "Facebook",
        username: "lukeask@mail.com",
        password: "goodpassword123",
        url: "No url",
        notes: "No notes",
    };
</script>

<fieldset class="wrapper">
    <legend>{entry.title}</legend>
    <div class="content">
        <p><b>Username:</b> {entry.username}</p>
        <p><b>Password:</b> {entry.password}</p>
    </div>
</fieldset>

<style type="text/scss">
    .wrapper {
        min-width: 300px;
        max-width: 500px;
        padding: 5px 20px;
        margin: 0 10px;
        border-radius: 16px;
        background: var(--bg-dark-colour);
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        border: 0;

        legend {
            width: 100%;
            font-size: 22px;
            font-weight: bold;
        }
        .action-btn {
            padding: 15px 0px 15px;
            justify-content: flex-end;
            display: flex;
        }
        .error {
            color: crimson;
        }
    }
</style>