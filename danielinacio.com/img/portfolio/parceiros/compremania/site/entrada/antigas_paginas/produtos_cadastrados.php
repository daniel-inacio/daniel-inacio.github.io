<?php
  //1 – Definimos Para quem vai ser enviado o email
  $para = "daniel@compremania.com";
  //2 - resgatar o nome digitado no formulário e  grava na variavel $nome
  $nome = $_POST['nome_fantasia'];
  // 3 - resgatar o assunto digitado no formulário e  grava na variavel //$assunto
  $assunto = 'PRODUTOS LOJA - '.$loja ;
  // 4-  Recebendo p formulario todo
  $loja = $_POST["loja"];
  	
	 $vet_campos = array();
	 
	$vet_campos[0] = "Nome do Produto:";
	$vet_campos[1] = "Preço:";
	$vet_campos[2] = "Desconto:";
	$vet_campos[3] ="Descrição Curta:";
	$vet_campos[4] ="Descrição Completa:";
	$vet_campos[5] ="Quantidade em Estoque:";
	$vet_campos[6] ="Quantidade Mínima para compra:";
	$vet_campos[7] ="Quantidade Máxima para compra:";
	$vet_campos[8] ="Disponibilidade:";
	$vet_campos[9] ="Atributo 1:";
	$vet_campos[10] ="Atributo 2:";
	$vet_campos[11] ="Comprimento:";
	$vet_campos[12] ="Largura:";
	$vet_campos[13] ="Altura:";
	$vet_campos[14] ="Unidade de Medida:";
	$vet_campos[15] ="Peso:";
	$vet_campos[16] ="Unidade Medida:";
	$vet_campos[17] ="Unidade de Embalagem:";
	$vet_campos[18] ="Unidades na caixa:";
	

$cm0 = $_POST['cm0'];
$cm1 = $_POST['cm1'];
$cm2 = $_POST['cm2'];
$cm3 = $_POST['cm3'];
$cm4 = $_POST['cm4'];
$cm5 = $_POST['cm5'];
$cm6 = $_POST['cm6'];
$cm7 = $_POST['cm7'];
$cm8 = $_POST['cm8'];
$cm9 = $_POST['cm9'];
$cm10 = $_POST['cm10'];
$cm11 = $_POST['cm11'];
$cm12 = $_POST['cm12'];
$cm13 = $_POST['cm13'];
$cm14 = $_POST['cm14'];
$cm15 = $_POST['cm15'];
$cm16 = $_POST['cm16'];
$cm17 = $_POST['cm17'];
$cm18 = $_POST['cm18'];
$cm19 = $_POST['cm19'];
$cm20 = $_POST['cm20'];
$cm21 = $_POST['cm21'];
$cm22 = $_POST['cm22'];
$cm23 = $_POST['cm23'];
$cm24 = $_POST['cm24'];
$cm25 = $_POST['cm25'];
$cm26 = $_POST['cm26'];
$cm27 = $_POST['cm27'];
$cm28 = $_POST['cm28'];
$cm29 = $_POST['cm29'];
$cm30 = $_POST['cm30'];
$cm31 = $_POST['cm31'];
$cm32 = $_POST['cm32'];
$cm33 = $_POST['cm33'];
$cm34 = $_POST['cm34'];
$cm35 = $_POST['cm35'];
$cm36 = $_POST['cm36'];
$cm37 = $_POST['cm37'];
$cm38 = $_POST['cm38'];
$cm39 = $_POST['cm39'];
$cm40 = $_POST['cm40'];
$cm41 = $_POST['cm41'];
$cm42 = $_POST['cm42'];
$cm43 = $_POST['cm43'];
$cm44 = $_POST['cm44'];
$cm45 = $_POST['cm45'];
$cm46 = $_POST['cm46'];
$cm47 = $_POST['cm47'];
$cm48 = $_POST['cm48'];
$cm49 = $_POST['cm49'];
$cm50 = $_POST['cm50'];
$cm51 = $_POST['cm51'];
$cm52 = $_POST['cm52'];
$cm53 = $_POST['cm53'];
$cm54 = $_POST['cm54'];
$cm55 = $_POST['cm55'];
$cm56 = $_POST['cm56'];
$cm57 = $_POST['cm57'];
$cm58 = $_POST['cm58'];
$cm59 = $_POST['cm59'];
$cm60 = $_POST['cm60'];
$cm61 = $_POST['cm61'];
$cm62 = $_POST['cm62'];
$cm63 = $_POST['cm63'];
$cm64 = $_POST['cm64'];
$cm65 = $_POST['cm65'];
$cm66 = $_POST['cm66'];
$cm67 = $_POST['cm67'];
$cm68 = $_POST['cm68'];
$cm69 = $_POST['cm69'];
$cm70 = $_POST['cm70'];
$cm71 = $_POST['cm71'];
$cm72 = $_POST['cm72'];
$cm73 = $_POST['cm73'];
$cm74 = $_POST['cm74'];
$cm75 = $_POST['cm75'];
$cm76 = $_POST['cm76'];
$cm77 = $_POST['cm77'];
$cm78 = $_POST['cm78'];
$cm79 = $_POST['cm79'];
$cm80 = $_POST['cm80'];
$cm81 = $_POST['cm81'];
$cm82 = $_POST['cm82'];
$cm83 = $_POST['cm83'];
$cm84 = $_POST['cm84'];
$cm85 = $_POST['cm85'];
$cm86 = $_POST['cm86'];
$cm87 = $_POST['cm87'];
$cm88 = $_POST['cm88'];
$cm89 = $_POST['cm89'];
$cm90 = $_POST['cm90'];
$cm91 = $_POST['cm91'];
$cm92 = $_POST['cm92'];
$cm93 = $_POST['cm93'];
$cm94 = $_POST['cm94'];
$cm95 = $_POST['cm95'];
$cm96 = $_POST['cm96'];
$cm97 = $_POST['cm97'];
$cm98 = $_POST['cm98'];
$cm99 = $_POST['cm99'];
$cm100 = $_POST['cm100'];
$cm101 = $_POST['cm101'];
$cm102 = $_POST['cm102'];
$cm103 = $_POST['cm103'];
$cm104 = $_POST['cm104'];
$cm105 = $_POST['cm105'];
$cm106 = $_POST['cm106'];
$cm107 = $_POST['cm107'];
$cm108 = $_POST['cm108'];
$cm109 = $_POST['cm109'];
$cm110 = $_POST['cm110'];
$cm111 = $_POST['cm111'];
$cm112 = $_POST['cm112'];
$cm113 = $_POST['cm113'];
$cm114 = $_POST['cm114'];
$cm115 = $_POST['cm115'];
$cm116 = $_POST['cm116'];
$cm117 = $_POST['cm117'];
$cm118 = $_POST['cm118'];
$cm119 = $_POST['cm119'];
$cm120 = $_POST['cm120'];
$cm121 = $_POST['cm121'];
$cm122 = $_POST['cm122'];
$cm123 = $_POST['cm123'];
$cm124 = $_POST['cm124'];
$cm125 = $_POST['cm125'];
$cm126 = $_POST['cm126'];
$cm127 = $_POST['cm127'];
$cm128 = $_POST['cm128'];
$cm129 = $_POST['cm129'];
$cm130 = $_POST['cm130'];
$cm131 = $_POST['cm131'];
$cm132 = $_POST['cm132'];
$cm133 = $_POST['cm133'];
$cm134 = $_POST['cm134'];
$cm135 = $_POST['cm135'];
$cm136 = $_POST['cm136'];
$cm137 = $_POST['cm137'];
$cm138 = $_POST['cm138'];
$cm139 = $_POST['cm139'];
$cm140 = $_POST['cm140'];
$cm141 = $_POST['cm141'];
$cm142 = $_POST['cm142'];
$cm143 = $_POST['cm143'];
$cm144 = $_POST['cm144'];
$cm145 = $_POST['cm145'];
$cm146 = $_POST['cm146'];
$cm147 = $_POST['cm147'];
$cm148 = $_POST['cm148'];
$cm149 = $_POST['cm149'];
$cm150 = $_POST['cm150'];
$cm151 = $_POST['cm151'];
$cm152 = $_POST['cm152'];
$cm153 = $_POST['cm153'];
$cm154 = $_POST['cm154'];
$cm155 = $_POST['cm155'];
$cm156 = $_POST['cm156'];
$cm157 = $_POST['cm157'];
$cm158 = $_POST['cm158'];
$cm159 = $_POST['cm159'];
$cm160 = $_POST['cm160'];
$cm161 = $_POST['cm161'];
$cm162 = $_POST['cm162'];
$cm163 = $_POST['cm163'];
$cm164 = $_POST['cm164'];
$cm165 = $_POST['cm165'];
$cm166 = $_POST['cm166'];
$cm167 = $_POST['cm167'];
$cm168 = $_POST['cm168'];
$cm169 = $_POST['cm169'];
$cm170 = $_POST['cm170'];
$cm171 = $_POST['cm171'];
$cm172 = $_POST['cm172'];
$cm173 = $_POST['cm173'];
$cm174 = $_POST['cm174'];
$cm175 = $_POST['cm175'];
$cm176 = $_POST['cm176'];
$cm177 = $_POST['cm177'];
$cm178 = $_POST['cm178'];
$cm179 = $_POST['cm179'];
$cm180 = $_POST['cm180'];
$cm181 = $_POST['cm181'];
$cm182 = $_POST['cm182'];
$cm183 = $_POST['cm183'];
$cm184 = $_POST['cm184'];
$cm185 = $_POST['cm185'];
$cm186 = $_POST['cm186'];
$cm187 = $_POST['cm187'];
$cm188 = $_POST['cm188'];
$cm189 = $_POST['cm189'];
$cm190 = $_POST['cm190'];
$cm191 = $_POST['cm191'];
$cm192 = $_POST['cm192'];
$cm193 = $_POST['cm193'];
$cm194 = $_POST['cm194'];
$cm195 = $_POST['cm195'];
$cm196 = $_POST['cm196'];
$cm197 = $_POST['cm197'];
$cm198 = $_POST['cm198'];
$cm199 = $_POST['cm199'];
$cm200 = $_POST['cm200'];
$cm201 = $_POST['cm201'];
$cm202 = $_POST['cm202'];
$cm203 = $_POST['cm203'];
$cm204 = $_POST['cm204'];
$cm205 = $_POST['cm205'];
$cm206 = $_POST['cm206'];
$cm207 = $_POST['cm207'];
$cm208 = $_POST['cm208'];
$cm209 = $_POST['cm209'];
$cm210 = $_POST['cm210'];
$cm211 = $_POST['cm211'];
$cm212 = $_POST['cm212'];
$cm213 = $_POST['cm213'];
$cm214 = $_POST['cm214'];
$cm215 = $_POST['cm215'];
$cm216 = $_POST['cm216'];
$cm217 = $_POST['cm217'];
$cm218 = $_POST['cm218'];
$cm219 = $_POST['cm219'];
$cm220 = $_POST['cm220'];
$cm221 = $_POST['cm221'];
$cm222 = $_POST['cm222'];
$cm223 = $_POST['cm223'];
$cm224 = $_POST['cm224'];
$cm225 = $_POST['cm225'];
$cm226 = $_POST['cm226'];
$cm227 = $_POST['cm227'];
$cm228 = $_POST['cm228'];
$cm229 = $_POST['cm229'];
$cm230 = $_POST['cm230'];
$cm231 = $_POST['cm231'];
$cm232 = $_POST['cm232'];
$cm233 = $_POST['cm233'];
$cm234 = $_POST['cm234'];
$cm235 = $_POST['cm235'];
$cm236 = $_POST['cm236'];
$cm237 = $_POST['cm237'];
$cm238 = $_POST['cm238'];
$cm239 = $_POST['cm239'];
$cm240 = $_POST['cm240'];
$cm241 = $_POST['cm241'];
$cm242 = $_POST['cm242'];
$cm243 = $_POST['cm243'];
$cm244 = $_POST['cm244'];
$cm245 = $_POST['cm245'];
$cm246 = $_POST['cm246'];
$cm247 = $_POST['cm247'];
$cm248 = $_POST['cm248'];
$cm249 = $_POST['cm249'];
$cm250 = $_POST['cm250'];
$cm251 = $_POST['cm251'];
$cm252 = $_POST['cm252'];
$cm253 = $_POST['cm253'];
$cm254 = $_POST['cm254'];
$cm255 = $_POST['cm255'];
$cm256 = $_POST['cm256'];
$cm257 = $_POST['cm257'];
$cm258 = $_POST['cm258'];
$cm259 = $_POST['cm259'];
$cm260 = $_POST['cm260'];
$cm261 = $_POST['cm261'];
$cm262 = $_POST['cm262'];
$cm263 = $_POST['cm263'];
$cm264 = $_POST['cm264'];
$cm265 = $_POST['cm265'];
$cm266 = $_POST['cm266'];
$cm267 = $_POST['cm267'];
$cm268 = $_POST['cm268'];
$cm269 = $_POST['cm269'];
$cm270 = $_POST['cm270'];
$cm271 = $_POST['cm271'];
$cm272 = $_POST['cm272'];
$cm273 = $_POST['cm273'];
$cm274 = $_POST['cm274'];
$cm275 = $_POST['cm275'];
$cm276 = $_POST['cm276'];
$cm277 = $_POST['cm277'];
$cm278 = $_POST['cm278'];
$cm279 = $_POST['cm279'];
$cm280 = $_POST['cm280'];
$cm281 = $_POST['cm281'];
$cm282 = $_POST['cm282'];
$cm283 = $_POST['cm283'];
$cm284 = $_POST['cm284'];
$cm285 = $_POST['cm285'];
$cm286 = $_POST['cm286'];
$cm287 = $_POST['cm287'];
$cm288 = $_POST['cm288'];
$cm289 = $_POST['cm289'];
$cm290 = $_POST['cm290'];
$cm291 = $_POST['cm291'];
$cm292 = $_POST['cm292'];
$cm293 = $_POST['cm293'];
$cm294 = $_POST['cm294'];
$cm295 = $_POST['cm295'];
$cm296 = $_POST['cm296'];
$cm297 = $_POST['cm297'];
$cm298 = $_POST['cm298'];
$cm299 = $_POST['cm299'];
$cm300 = $_POST['cm300'];
$cm301 = $_POST['cm301'];
$cm302 = $_POST['cm302'];
$cm303 = $_POST['cm303'];
$cm304 = $_POST['cm304'];
$cm305 = $_POST['cm305'];
$cm306 = $_POST['cm306'];
$cm307 = $_POST['cm307'];
$cm308 = $_POST['cm308'];
$cm309 = $_POST['cm309'];
$cm310 = $_POST['cm310'];
$cm311 = $_POST['cm311'];
$cm312 = $_POST['cm312'];
$cm313 = $_POST['cm313'];
$cm314 = $_POST['cm314'];
$cm315 = $_POST['cm315'];
$cm316 = $_POST['cm316'];
$cm317 = $_POST['cm317'];
$cm318 = $_POST['cm318'];
$cm319 = $_POST['cm319'];
$cm320 = $_POST['cm320'];
$cm321 = $_POST['cm321'];
$cm322 = $_POST['cm322'];
$cm323 = $_POST['cm323'];
$cm324 = $_POST['cm324'];
	

	
	
	
		

	$mensagem .= "<table class='table table-bordered table-striped' border='1'>";
				
				
					  for ($i=0;$i<count($cm0);$i++)
					{
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm0[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm1)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 2</div></td></td>";	
					endif;	
				
					 for ($i=0;$i<count($cm1);$i++)
					{
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm1[$i]. "<br></td>
										</tr>
									";
															
					}
					
					
					if (empty($cm2)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 3</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm2);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm2[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm3)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 4</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm3);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm3[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm4)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 5</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm4);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm4[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm5)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 6</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm5);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm5[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					
					if (empty($cm6)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 7</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm6);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm6[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					
					if (empty($cm7)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 8</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm7);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm7[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm8)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 9</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm8);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm8[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm9)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 10</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm9);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm9[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm10)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 11</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm10);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm10[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm11)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 12</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm11);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm11[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm12)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 13</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm12);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm12[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm13)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 14</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm13);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm13[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm14)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 15</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm14);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm14[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm15)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 16</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm15);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm15[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm16)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 17</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm16);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm16[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm17)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 18</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm17);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm17[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm18)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 19</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm18);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm18[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm19)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 20</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm19);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm19[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm20)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 21</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm20);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm20[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm21)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 22</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm21);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm21[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm22)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 23</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm22);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm22[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm23)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 24</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm23);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm23[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm24)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 25</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm24);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm24[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm25)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 26</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm25);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm25[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm26)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 27</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm26);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm26[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm27)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 28</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm27);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm27[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm28)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 29</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm28);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm28[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm29)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 30</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm29);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm29[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm30)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 31</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm30);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm30[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm31)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 32</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm31);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm31[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm32)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 33</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm32);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm32[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm33)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 34</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm33);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm33[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm34)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 35</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm34);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm34[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm35)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 36</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm35);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm35[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm36)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 37</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm36);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm36[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm37)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 38</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm37);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm37[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm38)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 39</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm38);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm38[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm39)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 40</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm39);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm39[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm40)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 41</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm40);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm40[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm41)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 42</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm41);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm41[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm42)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 43</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm42);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm42[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm43)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 44</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm43);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm43[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm44)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 45</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm44);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm44[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm45)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 46</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm45);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm45[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm46)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 47</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm46);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm46[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm47)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 48</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm47);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm47[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm48)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 49</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm48);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm48[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm49)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 50</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm49);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm49[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm50)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 51</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm50);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm50[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm51)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 52</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm51);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm51[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm52)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 53</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm52);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm52[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm53)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 54</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm53);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm53[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm54)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 55</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm54);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm54[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm55)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 56</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm55);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm55[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm56)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 57</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm56);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm56[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm57)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 58</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm57);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm57[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm58)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 59</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm58);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm58[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm59)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 60</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm59);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm59[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm60)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 61</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm60);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm60[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm61)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 62</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm61);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm61[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm62)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 63</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm62);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm62[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm63)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 64</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm63);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm63[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm64)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 65</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm64);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm64[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm65)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 66</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm65);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm65[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm66)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 67</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm66);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm66[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm67)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 68</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm67);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm67[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm68)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 69</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm68);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm68[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm69)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 70</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm69);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm69[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm70)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 71</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm70);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm70[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm71)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 72</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm71);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm71[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm72)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 73</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm72);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm72[$i]. "<br></td>
										</tr>
									";
						
											
					}
				if (empty($cm73)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 74</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm73);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm73[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm74)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 75</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm74);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm74[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm75)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 76</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm75);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm75[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm76)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 77</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm76);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm76[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm77)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 78</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm77);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm77[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm78)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 79</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm78);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm78[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm79)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 80</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm79);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm79[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm80)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 81</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm80);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm80[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm81)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 82</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm81);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm81[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm82)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 83</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm82);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm82[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm83)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 84</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm83);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm83[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm84)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 85</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm84);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm84[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm85)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 86</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm85);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm85[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm86)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 87</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm86);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm86[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm87)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 88</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm87);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm87[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm88)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 89</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm88);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm88[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm89)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 90</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm89);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm89[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm90)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 91</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm90);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm90[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm91)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 92</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm91);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm91[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm92)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 93</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm92);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm92[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm93)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 94</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm93);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm93[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm94)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 95</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm94);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm94[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm94)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 96</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm94);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm94[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm95)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 97</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm95);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm95[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm96)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 98</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm96);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm96[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm97)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 99</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm97);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm97[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm98)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 100</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm98);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm98[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm99)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 101</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm99);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm99[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm100)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 102</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm100);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm100[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm101)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 103</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm101);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm101[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm102)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 104</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm102);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm102[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm103)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 105</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm103);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm103[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm104)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 106</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm104);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm104[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm105)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 107</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm105);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm105[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm106)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 108</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm106);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm106[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm107)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 109</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm107);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm107[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm108)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 110</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm108);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm108[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm109)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 111</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm109);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm109[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm110)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 112</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm110);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm110[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm111)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 113</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm111);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm111[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm112)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 114</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm112);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm112[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm113)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 115</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm113);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm113[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm114)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 116</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm114);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm114[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm115)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 117</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm115);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm115[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm116)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 118</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm116);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm116[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm117)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 119</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm117);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm117[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm118)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 120</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm118);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm118[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm119)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 121</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm119);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm119[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm120)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 122</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm120);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm120[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm121)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 123</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm121);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm121[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm122)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 124</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm122);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm122[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm123)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 125</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm123);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm123[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm124)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 126</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm124);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm124[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm125)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 127</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm125);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm125[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm126)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 128</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm126);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm126[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm127)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 129</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm127);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm127[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm128)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 130</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm128);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm128[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm129)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 131</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm129);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm129[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm130)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 132</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm130);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm130[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm131)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 133</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm131);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm131[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm132)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 134</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm132);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm132[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm133)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 135</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm133);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm133[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm134)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 136</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm134);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm134[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm135)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 137</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm135);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm135[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm136)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 138</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm136);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm136[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm137)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 139</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm137);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm137[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm138)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 140</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm138);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm138[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm139)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 141</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm139);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm139[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm140)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 142</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm140);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm140[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm141)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 143</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm141);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm141[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm142)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 144</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm142);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm142[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm143)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 145</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm143);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm143[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm144)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 146</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm144);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm144[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm145)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 147</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm145);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm145[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm146)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 148</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm146);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm146[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm147)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 149</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm147);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm147[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm148)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 150</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm148);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm148[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm149)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 151</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm149);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm149[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm150)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 152</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm150);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm150[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm151)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 153</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm151);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm151[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm152)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 154</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm152);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm152[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm153)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 155</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm153);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm153[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm154)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 156</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm154);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm154[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm155)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 157</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm155);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm155[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm156)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 158</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm156);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm156[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm157)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 159</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm157);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm157[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm158)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 160</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm158);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm158[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm159)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 161</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm159);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm159[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm160)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 162</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm160);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm160[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm161)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 163</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm161);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm161[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm162)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 164</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm162);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm162[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm163)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 165</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm163);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm163[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm164)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 166</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm164);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm164[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm165)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 167</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm165);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm165[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm166)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 168</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm166);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm166[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm167)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 169</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm167);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm167[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm168)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 170</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm168);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm168[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm169)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 171</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm169);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm169[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm170)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 172</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm170);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm170[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm171)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 173</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm171);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm171[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm172)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 174</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm172);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm172[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm173)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 175</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm173);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm173[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm174)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 176</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm174);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm174[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm175)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 177</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm175);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm175[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm176)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 178</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm176);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm176[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm177)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 179</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm177);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm177[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm178)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 180</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm178);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm178[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm179)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 181</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm179);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm179[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm180)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 182</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm180);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm180[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm181)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 183</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm181);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm181[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm182)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 184</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm182);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm182[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm183)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 185</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm183);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm183[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm184)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 186</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm184);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm184[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm185)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 187</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm185);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm185[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm186)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 188</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm186);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm186[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm187)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 189</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm187);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm187[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm188)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 190</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm188);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm188[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm189)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 191</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm189);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm189[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm190)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 192</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm190);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm190[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm191)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 193</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm191);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm191[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm192)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 194</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm192);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm192[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm193)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 195</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm193);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm193[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm194)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 196</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm194);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm194[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm195)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 197</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm195);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm195[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm196)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 198</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm196);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm196[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm197)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 199</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm197);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm197[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm198)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 200</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm198);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm198[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm199)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 201</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm199);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm199[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm200)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 202</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm200);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm200[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm201)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 203</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm201);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm201[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm202)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 204</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm202);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm202[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm203)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 205</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm203);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm203[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm204)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 206</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm204);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm204[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm205)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 207</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm205);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm205[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm206)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 208</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm206);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm206[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm207)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 209</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm207);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm207[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm208)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 210</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm208);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm208[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm209)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 211</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm209);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm209[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm210)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 212</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm210);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm210[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm211)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 213</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm211);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm211[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm212)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 214</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm212);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm212[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm213)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 215</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm213);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm213[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm214)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 216</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm214);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm214[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm215)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 217</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm215);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm215[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm216)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 218</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm216);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm216[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm217)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 219</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm217);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm217[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm218)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 220</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm218);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm219[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm219)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 221</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm219);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm220[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm220)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 222</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm220);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm220[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm221)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 223</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm221);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm221[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm222)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 224</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm222);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm222[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm223)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 225</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm223);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm223[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm224)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 226</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm224);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm224[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm225)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 227</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm225);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm225[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm226)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 228</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm226);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm226[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm227)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 229</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm227);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm227[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm228)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 230</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm228);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm228[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm229)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 231</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm229);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm229[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm230)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 232</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm230);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm230[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm231)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 233</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm231);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm231[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm232)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 234</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm232);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm232[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm233)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 235</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm233);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm233[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm234)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 236</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm234);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm234[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm235)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 237</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm235);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm235[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm236)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 238</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm236);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm236[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm237)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 239</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm237);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm237[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm238)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 240</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm238);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm238[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm239)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 241</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm239);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm239[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm240)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 242</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm240);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm240[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm241)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 243</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm241);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm241[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm242)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 244</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm242);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm242[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm243)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 245</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm243);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm243[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm244)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 246</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm244);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm244[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm245)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 247</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm245);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm245[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm246)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 248</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm246);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm246[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm247)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 249</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm247);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm247[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm248)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 250</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm248);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm248[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm249)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 251</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm249);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm249[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm250)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 252</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm250);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm250[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm251)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 253</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm251);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm251[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm252)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 254</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm252);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm252[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm253)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 255</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm253);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm253[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm254)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 256</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm254);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm254[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm255)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 257</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm255);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm255[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm256)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 258</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm256);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm256[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm257)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 259</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm257);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm257[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm258)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 260</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm258);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm258[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm259)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 261</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm259);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm259[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm260)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 262</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm260);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm260[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm261)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 263</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm261);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm261[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm262)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 264</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm262);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm262[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm263)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 265</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm263);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm263[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm264)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 266</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm264);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm264[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm265)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 267</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm265);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm265[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm266)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 268</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm266);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm266[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm267)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 269</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm267);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm267[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm268)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 270</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm268);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm268[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm269)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 271</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm269);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm269[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm270)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 272</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm270);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm270[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm271)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 273</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm271);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm271[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm272)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 274</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm272);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm272[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm273)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 275</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm273);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm273[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm274)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 276</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm274);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm274[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm275)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 277</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm275);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm275[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm276)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 278</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm276);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm276[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm277)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 279</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm277);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm277[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm278)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 280</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm278);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm278[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm279)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 281</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm279);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm279[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm280)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 282</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm280);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm280[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm281)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 283</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm281);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm281[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm282)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 284</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm282);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm282[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm283)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 285</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm283);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm283[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm284)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 286</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm284);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm284[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm285)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 287</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm285);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm285[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm286)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 288</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm286);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm286[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm287)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 289</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm287);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm287[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm288)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 290</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm288);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm288[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm289)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 291</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm289);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm289[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm290)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 292</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm290);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm290[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm291)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 293</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm291);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm291[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm292)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 294</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm292);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm292[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm293)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 295</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm293);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm293[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm294)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 296</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm294);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm294[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm295)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 297</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm295);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm295[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm296)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 298</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm296);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm296[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm297)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 299</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm297);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm297[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm298)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 300</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm298);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm298[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm299)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 301</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm299);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm299[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm300)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 302</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm300);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm300[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm301)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 303</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm301);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm301[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm302)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 304</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm302);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm302[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm303)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 305</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm303);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm303[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm304)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 306</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm304);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm304[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm305)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 307</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm305);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm305[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm306)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 308</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm306);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm306[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm307)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 309</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm307);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm307[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm308)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 310</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm308);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm308[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm309)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 311</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm309);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm309[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm310)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 312</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm310);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm310[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm311)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 313</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm311);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm311[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm312)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 314</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm312);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm312[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm313)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 315</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm313);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm313[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				if (empty($cm314)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 316</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm314);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm314[$i]. "<br></td>
										</tr>
									";
						
											
					}
					
					if (empty($cm315)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 317</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm315);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm315[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm316)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 318</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm316);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm316[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm317)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 319</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm317);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm317[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm318)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 320</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm318);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm318[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm319)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 321</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm319);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm319[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm320)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 322</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm320);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm320[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm321)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 323</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm321);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm321[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm322)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 324</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm322);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm322[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm323)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 325</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm323);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm323[$i]. "<br></td>
										</tr>
									";
						
											
					}
					if (empty($cm324)): 
					
					$mensagem .= "";
						else:
					$mensagem .= "<tr><td><div class='alertMessage inline success SE'>Produto 326</div></td></td>";	
					endif;	
					
					  for ($i=0;$i<count($cm324);$i++)
					{	
						
						$mensagem .= "
										<tr class='odd gradeX'>
											<td width='30%'>".$vet_campos[$i]."</td>
											<td width='10%'><br><strong>" . $i . ":</strong></td>
											<td width='60%'> " . $cm324[$i]. "<br></td>
										</tr>
									";
						
											
					}
				
				
					 
   $mensagem .= "</table>";

   //5 – Agora definimos a  mensagem que vai ser enviado no e-mail


 
//6 – agora inserimos as codificações corretas e  tudo mais.
  $headers =  "Content-Type:text/html; charset=UTF-8\n";
  $headers .= "From:  compremania.com<daniel@comerpamania.com>\n"; //Vai ser //mostrado que  o email partiu deste email e seguido do nome
  $headers .= "X-Sender:  <cm@compremania.com>\n"; //email do servidor //que enviou
  $headers .= "X-Mailer: PHP  v".phpversion()."\n";
  $headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
  $headers .= "Return-Path:  <daniel@compermania.com>\n"; //caso a msg //seja respondida vai para  este email.
  $headers .= "MIME-Version: 1.0\n";
 
mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.

?>
<!DOCTYPE html>
<html lang="en">
  <head>
        <meta charset="utf-8" />
        <title>Cadastro Nova Loja Compre MANIA</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- Link shortcut icon-->
        <link rel="shortcut icon" type="image/ico" href="images/favicon.ico" /> 

        <!-- CSS Stylesheet-->
        <link type="text/css" rel="stylesheet" href="components/bootstrap/bootstrap.css" />
        <link type="text/css" rel="stylesheet" href="components/bootstrap/bootstrap-responsive.css" />
        <link type="text/css" rel="stylesheet" href="css/zice.style.css" />
		
        <!--[if lte IE 8]><script language="javascript" type="text/javascript" src="components/flot/excanvas.min.js"></script><![endif]-->  
        
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="components/ui/jquery.ui.min.js"></script> 
        <script type="text/javascript" src="components/bootstrap/bootstrap.min.js"></script>
        <script type="text/javascript" src="components/ui/timepicker.js"></script>
        <script type="text/javascript" src="components/colorpicker/js/colorpicker.js"></script>
        <script type="text/javascript" src="components/form/form.js"></script>
        <script type="text/javascript" src="components/elfinder/js/elfinder.full.js"></script>
        <script type="text/javascript" src="components/datatables/dataTables.min.js"></script>
        <script type="text/javascript" src="components/fancybox/jquery.fancybox.js"></script>
        <script type="text/javascript" src="components/jscrollpane/jscrollpane.min.js"></script>
        <script type="text/javascript" src="components/editor/jquery.cleditor.js"></script>
        <script type="text/javascript" src="components/chosen/chosen.js"></script>
        <script type="text/javascript" src="components/validationEngine/jquery.validationEngine.js"></script>
        <script type="text/javascript" src="components/validationEngine/jquery.validationEngine-en.js"></script>
        <script type="text/javascript" src="components/fullcalendar/fullcalendar.js"></script>
        <script type="text/javascript" src="components/flot/flot.js"></script>
        <script type="text/javascript" src="components/uploadify/uploadify.js"></script>       
        <script type="text/javascript" src="components/Jcrop/jquery.Jcrop.js"></script>
        <script type="text/javascript" src="components/smartWizard/jquery.smartWizard.min.js"></script>
        <script type="text/javascript" src="js/jquery.cookie.js"></script>
        <script type="text/javascript" src="js/zice.custom.js"></script>

		<script type="text/javascript">
			jQuery(document).ready(function() {
				jQuery("#demovalidation").validationEngine({
					prettySelect : true,
					useSuffix: "_chzn",
				});
				$("#country").chosen({
					allow_single_deselect : true
				});

			  // Example Overlay form
			  $(".on_load").live('click',function(){	
				  $('body').append('<div id="overlay"></div>');
				  $('#overlay').css('opacity',0.4).fadeIn(400);
				  var activeLoad = $(this).attr("name");		
				  var titleTabs = $(this).attr("title");		
				  $("ul.tabs li").hide();		
						  $('ul.tabs li').each(function(index) {
								  var activeTab = $('ul.tabs li:eq('+index+')').find("a").attr("href")			
								  if(activeTab==activeLoad){
									  $("ul.tabs ").append('<li class=active><a href="'+activeLoad+'" class=" prev on_prev "  id="on_prev_pro" name="'+activeLoad+'" >'+titleTabs+'</a></li>');
									  $("ul.tabs li:last").fadeIn();	
									  }
						  });
				  $('.widget-content').css({'position':'relative','z-index':'1001'});
				  $(".load_page").hide();
				  $('.show_add').show();
			   });
			  $(".on_prev").live('click',function(){	 
					$("ul.tabs li:last").remove();					 
					$("ul.tabs li").fadeIn();
					var pageLoad = $(this).attr("rel");	
					var activeLoad = $(this).attr("name");		
					  $(".show_add, .show_edit").hide();		
					  $(".show_edit").html('').hide();		
						  $(activeLoad).fadeIn();	
								  $(' .load_page').fadeIn(400,function(){   
										 $('#overlay').fadeOut(function(){
												   $('.widget-content').delay(500).css({'z-index':'','box-shadow':'','-moz-box-shadow':'','-webkit-box-shadow':''});
										  }); 
							  }); 
					ResetForm();
				   });	
			});
		</script>

		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>        
        <body>        
        
            <!-- Header -->
            <div id="header">
                <ul id="account_info" class="pull-right"> 
                    <li><img src="images/avatar.png" alt="Online" /></li>
                    <li class="setting">
                        Bem-vindo, <b class="red">Compre Mania</b>
                       
                    </li>
                    <li class="Sair" title="Disconnect">Sair</li> 
                </ul>
            </div><!-- End Header -->

              <!-- left_menu -->
             <div id="left_menu">
                    <ul id="main_menu" class="main_menu">
                      <li><a href="dashboard.html"><span class="ico gray shadow home"></span><b>Todas as Lojas</b></a></li>
                      <li class="select" ><a href="cadastrar_nova_loja.php"><span class="ico gray shadow window"></span><b>Cadastrar Nova Loja</b></a>
                        <li><a href="cadastrar_produtos.php"><span class="ico gray  shadow paragraph_align_left"></span><b>Cadastrar Produtos</b></a></li>
                       
                      </li>
                      <li><a href="http://planos.compremania.com/" target="new"><span class="ico gray  dimensions"></span><b>Loja de Planos</b></a> </li>
                      <li><a href="https://drive.google.com/" target="new"><span class="ico gray shadow  file"></span><b>Upload Imagens</b></a></li>
                        
                      <li><a href="http://prezi.com/iai7wgvenmvl/present/?auth_key=721g6ht&follow=peebjonydgia&kw=present-iai7wgvenmvl&rc=ref-35169447" target="new"><span class="ico gray shadow   encrypt"></span><b>Apresentação Oficial</b></a></li>
                      <li><a href="https://pagseguro.uol.com.br/" target="new"><span class="ico gray shadow abacus"></span><b>PagSeguro</b></a></li>
					 
                    
               </div>

            
              <div id="content">
                <div class="inner">
                                    
                   <div class="row-fluid">
                          <div class="span12 clearfix">
                              <div class="logo"></div>
                              <ul id="shortcut" class="clearfix">
                                    <li> <a href="#" title="Voltar ao Início"> <img src="images/icon/shortcut/home.png" alt="INÍCO" /><strong>Início</strong> </a> </li>
                                    <li> <a href="#" title="ESTATÍSTICAS"> <img src="images/icon/shortcut/graph.png" alt="ESTATÍSTICAS" /><strong>
                                    Estatísticas</strong> </a> </li>
                                    <li> <a href="#" title="CONFIGURAÇÕES"> <img src="images/icon/shortcut/setting.png" alt="CONFIGURAÇÕES" /><strong>Config</strong></a> </li> 
                                    <li> <a href="#" title="MENSAGENS"> <img src="images/icon/shortcut/mail.png" alt="MENSAGENS" /><strong>Mensagens</strong></a><div class="notification">10</div></li>
                              </ul>
                          </div>
                    </div>
                        
                    <div class="row-fluid">
                    
                    		<!-- Widget -->
                            <div class="widget  span12 clearfix">
                                <div class="widget-header">
                                    <span><i class="icon-warning-sign"></i> Cadastrar Nova Loja CM</span>
                                </div><!-- End widget-header -->	
                                <div class="widget-content">
                                
                                <div id="UITab" class="clearfix" style="position:relative;">
                                    <ul class="tabs">
                                        <li><a href="#tab1">CONFIRME OS DADOS DOS PRODUTOS CADASTRADOS</a></li>  
                                                   
                                    </ul>
        
                                <div class="tab_container">
        
                                  <div id="tab1" class="tab_content"> 
                                      <div class="load_page">
                                        <!-- title box -->
                                    <div class="alertMessage inline success SE">Produtos cadastrados com Sucesso!</div>
                                    <div class="boxtitle"><i class="icon-hdd"></i>
                                    <a href='javascript:history.back(1)'>
                                    Clique aqui para voltar.
                                    </a>
                                      </div>
                                     <?php
			
											
												 echo $mensagem;  
												
												
												/**for ($j=0;$j<count($cm1);$j++)
												{
											  $mensagem .= "<table width='100%'  border='1' cellspacing='0' cellpadding='0'>
														<tr>
															<td width='30%'>".$vet_campos[$j]."</td>
															<td width='10%'><br><strong>" . $j . ":</strong></td>
															<td width='60%'> " . $cm1[$j]. "<br></td>
														</tr>
													</table>";
												
												   }
												 echo $mensagem;  
												 echo "<div style='background-color:#F3C; width:100%; height:30px;'>acabou</div>";

								  **/
								   ?>
											
  
                                    
                                    
                                    
                                            
                                  </div><!--tab1-->
                                  
                                  
                                
                          </div>
                          </div><!-- end uitab-->
               
                                </div><!--  end widget-content -->
                            </div><!-- widget  span12 clearfix-->

                    </div><!-- row-fluid -->
                    <div id="footer"> &copy; Copyright 2013 <span class="tip"><a href="#" title="Compre Mania">Compre Mania Shopping Virtual</a> </span> </div>
                    
                </div> <!--// End inner -->
              </div> <!--// End ID content --> 

        </body>
        </html>