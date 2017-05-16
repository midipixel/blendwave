<section class="panelContent" data-panelname="fx" id="fx">
    <?php include('fileHeader.php')?>

    <?php
        $effects = ["reverb", "delay"];
     ?>

    <h3>Efeitos <em>Experimente com seu som utilizando efeitos DSP!</em></h3>

    <div class="row">
        <form action="" autocomplete="off">
            <div class="col-sm-6">
                <h5>
                    <label for="fx1">Efeito 1</label>
                    <label for="fx1_on">
                        <input type="radio" id="fx1_on">Liga</input>                    
                    </label>
                    <label for="fx1_on">
                        <input type="radio" id="fx1_off">Desliga</input>                    
                    </label>                    
                </h5>

                <div class="dspType fxType">
                    <select id="fxSelect"> 
                        <% for(var effect in fx){ %>                        
                            <option value="<%= effect %>" id="fx1"><%= fx[effect].name %></option>
                        <% } %>
                    </select>
                    
                    <% /*Render descriptions from _harp.json, making them available to JS*/ %>
                    <!--script>
                        
                        var fxDescriptions = {
                        <% for(var effect in fx){ %>
                            <%= effect %> : "<%= fx[effect].description %>",
                        <% } %>    
                        };
                    </script-->                    
                    <p></p>
                </div>
                
                <% for(var effect in fx){ %> 
                    <div class="dspSetup fxSetup <%= effect %>" id="<%= effect %>" >
                        <figure>
                            <img src="img/<%= effect %>.png" alt="">
                        </figure>
                        
                        <div id="fxParams">
                            <fieldset class="audioParams">
                                <% for(var param in fx[effect].params){ %>                          
                                    <label for="<%= param %>"><%= fx[effect].params[param].name %></label>
                                    <input type="range" id="<%= fx[effect].params[param] %>" min="<%= fx[effect].params[param].min %>" value="<%= fx[effect].params[param].value %>" max="<%= fx[effect].params[param].max %>" step="<%= fx[effect].params[param].step %>" data-type="audioParam">
                                    <output for="<%= param %>"><%= fx[effect].params[param].value %></output>
                                 <% } %>
                            </fieldset>                                              
                        </div>
                    </div>
                <% } %>
            </div>
        </form>
    </div>
</section>