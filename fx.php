<section class="panelContent" data-panelname="fx" id="fx">
    <?php include('fileHeader.php')?>

    <?php
        $effects = [
            "Reverb" => [
                "description" => "reverbera o som",
                "params" => [
                    "param1" => 0,
                    "param2" => 0
                ]
            ],
            "Delay" => [
                "description" => "promove atraso do som",
                "params" => [
                    "param1" => 0,
                    "param2" => 0
                ]
            ],
            "Distortion" => [
                "description" => "promove atraso do som",
                "params" => [
                    "param1" => 0,
                    "param2" => 0
                ]
            ],
            "Flanger" => [
                "description" => "promove atraso do som",
                "params" => [
                    "param1" => 0,
                    "param2" => 0
                ]
            ],
            "Ring Modulator" => [
                "description" => "promove atraso do som",
                "params" => [
                    "param1" => 0,
                    "param2" => 0
                ]
            ],
            "Compressor" => [
                "description" => "promove atraso do som",
                "params" => [
                    "param1" => 0,
                    "param2" => 0
                ]
            ]
        ];
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
                    <?php
                        // Populates combo box with effects
                        foreach ($effects as $fx => $props) {
                            $value = strtolower(str_replace(' ', '_', $fx));
                            echo "<option value='{$value}'>{$fx}</option>";
                        }
                    ?>
                    </select>

                    <dl>
                    <?php
                        // Populates definition list with effects and descriptions
                        foreach ($effects as $fx => $props) {
                            $id = strtolower(str_replace(' ', '_', $fx));

                            echo "<dt>{$fx}</dt>";

                            foreach ($props as $prop => $value){
                                if ($prop == 'description'){
                                    echo "<dd id='{$id}'>{$value}</dd>";
                                }
                                break;
                            }
                        }
                    ?>
                    </dl>
                </div>

                <?php foreach ($effects as $fx => $props): ?>
                    <?php $id = strtolower(str_replace(' ', '_', $fx)); ?>

                    <div class='dspSetup fxSetup' id='<?= $id ?>'>
                        <figure>
                            <img src="img/<?= $id ?>.png" alt="">
                        </figure>
                    </div>

                    <div id="fxParams">
                        <fieldset class="audioParams">
                            <?php foreach ($props as $prop => $value): ?>
                                <?php if ($prop == 'params'): ?>
                                    aqui vai ter parametro

                                <?php endif; ?>
                            <?php endforeach; ?>
                        </fieldset>

                    </div>
                <?php endforeach; ?>

                <!--div class="dspSetup fxSetup <%= effect %>" id="<%= effect %>" >
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
                </div-->

            </div>
        </form>
    </div>
</section>