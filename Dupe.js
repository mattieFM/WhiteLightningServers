<script>
var x;
for (var i=0; i<200; i++) {
x+=String.fromCharCode(Math.floor(Math.random()*0x1D300)+0x800)
}
log.write(x);
</script>
