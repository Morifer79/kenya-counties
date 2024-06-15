import { Popover, Select } from "antd";
import { useState } from "react";
import { Card, Container, FlexBox, Logo, Wrapper } from "./AppBody.styled";
import logo from "../../images/Coat_of_arms.png";

export const AppBody = () => {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const options = [
    { value: "all-counties", label: "All counties" },
    { value: "baringo", label: "Baringo" },
    { value: "bomet", label: "Bomet" },
    { value: "bungoma", label: "Bungoma" },
    { value: "busia", label: "Busia" },
    { value: "elgeyo-marakwet", label: "Elgeyo-Marakwet" },
    { value: "embu", label: "Embu" },
    { value: "garissa", label: "Garissa" },
    { value: "homa-bay", label: "Homa Bay" },
    { value: "isiolo", label: "Isiolo" },
    { value: "kajiado", label: "Kajiado" },
    { value: "kakamega", label: "Kakamega" },
    { value: "kericho", label: "Kericho" },
    { value: "kiambu", label: "Kiambu" },
    { value: "kilifi", label: "Kilifi" },
    { value: "kirinyaga", label: "Kirinyaga" },
    { value: "kisii", label: "Kisii" },
    { value: "kisumu", label: "Kisumu" },
    { value: "kitui", label: "Kitui" },
    { value: "kwale", label: "Kwale" },
    { value: "lamu", label: "Lamu" },
    { value: "laikipia", label: "Laikipia" },
    { value: "machakos", label: "Machakos" },
    { value: "makueni", label: "Makueni" },
    { value: "mandera", label: "Mandera" },
    { value: "marsabit", label: "Marsabit" },
    { value: "meru", label: "Meru" },
    { value: "migori", label: "Migori" },
    { value: "mombasa", label: "Mombasa" },
    { value: "muranga", label: "Murang'a" },
    { value: "nairobi", label: "Nairobi" },
    { value: "nakuru", label: "Nakuru" },
    { value: "nandi", label: "Nandi" },
    { value: "narok", label: "Narok" },
    { value: "nyamira", label: "Nyamira" },
    { value: "nyandarua", label: "Nyandarua" },
    { value: "nyeri", label: "Nyeri" },
    { value: "siaya", label: "Siaya" },
    { value: "samburu", label: "Samburu" },
    { value: "taita-taveta", label: "Taita Taveta" },
    { value: "tana-river", label: "Tana River" },
    { value: "tharaka-nithi", label: "Tharaka-Nithi" },
    { value: "trans-nzoia", label: "Trans Nzoia" },
    { value: "turkana", label: "Turkana" },
    { value: "uasin-gishu", label: "Uasin Gishu" },
    { value: "vihiga", label: "Vihiga" },
    { value: "wajir", label: "Wajir" },
    { value: "west-pokot", label: "West Pokot" },
  ];

  const handleChange = (value) => {
    setSelectedCounty(value);
  };

  return (
    <Container>
      <div>
        <Card
          className={
            selectedCounty === null || selectedCounty === "all-counties"
              ? "visible"
              : "hidden"
          }
        >
          <FlexBox>
            <Logo src={logo} alt="logo" />
            <h1>Kenya</h1>
          </FlexBox>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 580 367 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 52 428 000
          </p>
          <p>
            <span>Capital:</span> Nairobi
          </p>
        </Card>
        <Card className={selectedCounty === "mombasa" ? "visible" : "hidden"}>
          <h1>
            Mombasa <span>(MSA)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Mombasa.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 212 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 208 333
          </p>
          <p>
            <span>Capital:</span> Mombasa
          </p>
        </Card>
        <Card className={selectedCounty === "kwale" ? "visible" : "hidden"}>
          <h1>
            Kwale <span>(KWE)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Kwale_County_Flag.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 8 270 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 866 820
          </p>
          <p>
            <span>Capital:</span> Kwale
          </p>
        </Card>
        <Card
          className={selectedCounty === "taita-taveta" ? "visible" : "hidden"}
        >
          <h1>
            Taita Taveta <span>(TVT)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Taita_Taveta_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 17 083 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 340 671
          </p>
          <p>
            <span>Capital:</span> Wundanyi
          </p>
        </Card>
        <Card className={selectedCounty === "kilifi" ? "visible" : "hidden"}>
          <h1>
            Kilifi <span>(KLF)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Kilifi_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 12 245 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 453 787
          </p>
          <p>
            <span>Capital:</span> Kilifi
          </p>
        </Card>
        <Card className={selectedCounty === "lamu" ? "visible" : "hidden"}>
          <h1>
            Lamu <span>(LMU)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Lamu_County_Flag.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 6 497 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 143 920
          </p>
          <p>
            <span>Capital:</span> Lamu
          </p>
        </Card>
        <Card className={selectedCounty === "makueni" ? "visible" : "hidden"}>
          <h1>
            Makueni <span>(MKN)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Makueni_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 8 008 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 987 653
          </p>
          <p>
            <span>Capital:</span> Wote
          </p>
        </Card>
        <Card className={selectedCounty === "nairobi" ? "visible" : "hidden"}>
          <h1>
            Nairobi <span>(NBI)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_Nairobi_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 694 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 4 397 073
          </p>
          <p>
            <span>Capital:</span> Nairobi
          </p>
        </Card>
        <Card className={selectedCounty === "kajiado" ? "visible" : "hidden"}>
          <h1>
            Kajiado <span>(KJD)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Kajiado_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 21 292 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 117 840
          </p>
          <p>
            <span>Capital:</span> Kajiado
          </p>
        </Card>
        <Card className={selectedCounty === "machakos" ? "visible" : "hidden"}>
          <h1>
            Machakos <span>(MCK)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Machakos_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 5 952 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 421 932
          </p>
          <p>
            <span>Capital:</span> Machakos
          </p>
        </Card>
        <Card className={selectedCounty === "kiambu" ? "visible" : "hidden"}>
          <h1>
            Kiambu <span>(KMB)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Kiambu_County_Flag.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 449 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 2 417 735
          </p>
          <p>
            <span>Capital:</span> Kiambu
          </p>
        </Card>
        <Card className={selectedCounty === "migori" ? "visible" : "hidden"}>
          <h1>
            Migori <span>(MGR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Migori_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 586 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 116 436
          </p>
          <p>
            <span>Capital:</span> Migori
          </p>
        </Card>
        <Card className={selectedCounty === "muranga" ? "visible" : "hidden"}>
          <h1>
            Murang`a <span>(MRG)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Murang%27a_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 325 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 056 640
          </p>
          <p>
            <span>Capital:</span> Murang`a
          </p>
        </Card>
        <Card className={selectedCounty === "kisii" ? "visible" : "hidden"}>
          <h1>
            Kisii <span>(KSI)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Flag_of_Kisii_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 1 317 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 266 860
          </p>
          <p>
            <span>Capital:</span> Kisii
          </p>
        </Card>
        <Card className={selectedCounty === "narok" ? "visible" : "hidden"}>
          <h1>
            Narok <span>(NRK)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_Narok_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 17 921 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 157 873
          </p>
          <p>
            <span>Capital:</span> Narok
          </p>
        </Card>
        <Card className={selectedCounty === "nyamira" ? "visible" : "hidden"}>
          <h1>
            Nyamira <span>(NMR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Flag_of_Nyamira_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 912 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 605 576
          </p>
          <p>
            <span>Capital:</span> Nyamira
          </p>
        </Card>
        <Card className={selectedCounty === "bomet" ? "visible" : "hidden"}>
          <h1>
            Bomet <span>(BMT)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Bomet_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 1 997 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 875 689
          </p>
          <p>
            <span>Capital:</span> Bomet
          </p>
        </Card>
        <Card className={selectedCounty === "homa-bay" ? "visible" : "hidden"}>
          <h1>
            Homa Bay <span>(HBY)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Homa_Bay_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 3 154 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 131 950
          </p>
          <p>
            <span>Capital:</span> Homa Bay
          </p>
        </Card>
        <Card className={selectedCounty === "embu" ? "visible" : "hidden"}>
          <h1>
            Embu <span>(EMB)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_Embu_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 555 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 608 599
          </p>
          <p>
            <span>Capital:</span> Embu
          </p>
        </Card>
        <Card className={selectedCounty === "kirinyaga" ? "visible" : "hidden"}>
          <h1>
            Kirinyaga <span>(KRG)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Kirinyaga_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 1 205 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 610 411
          </p>
          <p>
            <span>Capital:</span> Kerugoya
          </p>
        </Card>
        <Card className={selectedCounty === "kitui" ? "visible" : "hidden"}>
          <h1>
            Kitui <span>(KTU)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Kitui_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 24 385 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 136 187
          </p>
          <p>
            <span>Capital:</span> Kitui
          </p>
        </Card>
        <Card
          className={selectedCounty === "tana-river" ? "visible" : "hidden"}
        >
          <h1>
            Tana River<span>(TRV)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Tana_River_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 35 375 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 315 943
          </p>
          <p>
            <span>Capital:</span> Hola
          </p>
        </Card>
        <Card className={selectedCounty === "nyeri" ? "visible" : "hidden"}>
          <h1>
            Nyeri<span>(NYR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Nyeri_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 361 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 759 164
          </p>
          <p>
            <span>Capital:</span> Nyeri
          </p>
        </Card>
        <Card className={selectedCounty === "kisumu" ? "visible" : "hidden"}>
          <h1>
            Kisumu<span>(KSM)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Kisumu_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 009 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 155 574
          </p>
          <p>
            <span>Capital:</span> Kisumu
          </p>
        </Card>
        <Card className={selectedCounty === "kericho" ? "visible" : "hidden"}>
          <h1>
            Kericho<span>(KRC)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_Kericho_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 454 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 901 777
          </p>
          <p>
            <span>Capital:</span> Kericho
          </p>
        </Card>
        <Card
          className={selectedCounty === "tharaka-nithi" ? "visible" : "hidden"}
        >
          <h1>
            Tharaka-Nithi<span>(TNT)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Tharaka_Nithi_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 609 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 393 177
          </p>
          <p>
            <span>Capital:</span> Kathwana
          </p>
        </Card>
        <Card className={selectedCounty === "nyandarua" ? "visible" : "hidden"}>
          <h1>
            Nyandarua<span>(NDR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_Nyandarua_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 3 107 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 638 289
          </p>
          <p>
            <span>Capital:</span> Ol Kalou
          </p>
        </Card>
        <Card className={selectedCounty === "vihiga" ? "visible" : "hidden"}>
          <h1>
            Vihiga<span>(VHG)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Vihiga_County_Flag.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 531 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 590 013
          </p>
          <p>
            <span>Capital:</span> Mbale
          </p>
        </Card>
        <Card className={selectedCounty === "nakuru" ? "visible" : "hidden"}>
          <h1>
            Nakuru<span>(NKR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Nakuru_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 7 509 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 2 162 202
          </p>
          <p>
            <span>Capital:</span> Nakuru
          </p>
        </Card>
        <Card className={selectedCounty === "siaya" ? "visible" : "hidden"}>
          <h1>
            Siaya <span>(SYA)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/86/Flag_of_Siaya_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 496 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 993 183
          </p>
          <p>
            <span>Capital:</span> Siaya
          </p>
        </Card>
        <Card className={selectedCounty === "nandi" ? "visible" : "hidden"}>
          <h1>
            Nandi <span>(NDI)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Contea_di_Nandi_flag.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 884 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 885 711
          </p>
          <p>
            <span>Capital:</span> Kapsabet
          </p>
        </Card>
        <Card className={selectedCounty === "meru" ? "visible" : "hidden"}>
          <h1>
            Meru <span>(MRU)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Meru_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 7 003 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 545 714
          </p>
          <p>
            <span>Capital:</span> Meru
          </p>
        </Card>
        <Card className={selectedCounty === "busia" ? "visible" : "hidden"}>
          <h1>
            Busia <span>(BSA)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Busia_County.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 1 628 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 893 681
          </p>
          <p>
            <span>Capital:</span> Busia
          </p>
        </Card>
        <Card className={selectedCounty === "laikipia" ? "visible" : "hidden"}>
          <h1>
            Laikipia <span>(LKP)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Laikipia_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 8 696 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 518 560
          </p>
          <p>
            <span>Capital:</span> Rumuruti
          </p>
        </Card>
        <Card className={selectedCounty === "kakamega" ? "visible" : "hidden"}>
          <h1>
            Kakamega <span>(KKG)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Kakamega_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 3 033 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 867 579
          </p>
          <p>
            <span>Capital:</span> Kakamega
          </p>
        </Card>
        <Card
          className={selectedCounty === "uasin-gishu" ? "visible" : "hidden"}
        >
          <h1>
            Uasin Gishu <span>(UGS)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Uasin_Gishu_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 955 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 163 186
          </p>
          <p>
            <span>Capital:</span> Eldoret
          </p>
        </Card>
        <Card className={selectedCounty === "garissa" ? "visible" : "hidden"}>
          <h1>
            Garissa <span>(GRS)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Flag_of_Garissa_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 45 720 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 841 353
          </p>
          <p>
            <span>Capital:</span> Garissa
          </p>
        </Card>
        <Card className={selectedCounty === "bungoma" ? "visible" : "hidden"}>
          <h1>
            Bungoma <span>(BGM)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Bungoma_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 206 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 670 570
          </p>
          <p>
            <span>Capital:</span> Bungoma
          </p>
        </Card>
        <Card
          className={selectedCounty === "trans-nzoia" ? "visible" : "hidden"}
        >
          <h1>
            Trans Nzoia <span>(TNZ)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Trans_Nzoia_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 2 469 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 990 341
          </p>
          <p>
            <span>Capital:</span> Kitale
          </p>
        </Card>
        <Card
          className={
            selectedCounty === "elgeyo-marakwet" ? "visible" : "hidden"
          }
        >
          <h1>
            Elgeyo-Marakwet <span>(EMK)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/87/Elgeyo_Marakwet_Flag.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 3 049 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 454 480
          </p>
          <p>
            <span>Capital:</span> Iten
          </p>
        </Card>
        <Card className={selectedCounty === "baringo" ? "visible" : "hidden"}>
          <h1>
            Baringo <span>(BRG)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Flag_of_Baringo_County.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 11 075 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 666 763
          </p>
          <p>
            <span>Capital:</span> Kabarnet
          </p>
        </Card>
        <Card className={selectedCounty === "isiolo" ? "visible" : "hidden"}>
          <h1>
            Isiolo <span>(ISL)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Isiolo_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 25 336 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 268 002
          </p>
          <p>
            <span>Capital:</span> Isiolo
          </p>
        </Card>
        <Card className={selectedCounty === "samburu" ? "visible" : "hidden"}>
          <h1>
            Samburu <span>(SBR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Samburu_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 20 182 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 310 327
          </p>
          <p>
            <span>Capital:</span> Maralal
          </p>
        </Card>
        <Card
          className={selectedCounty === "west-pokot" ? "visible" : "hidden"}
        >
          <h1>
            West Pokot <span>(WPK)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_West_Pokot_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 8 418 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 621 241
          </p>
          <p>
            <span>Capital:</span> Kapenguria
          </p>
        </Card>
        <Card className={selectedCounty === "wajir" ? "visible" : "hidden"}>
          <h1>
            Wajir <span>(WJR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Wajir_County_Flag.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 55 840 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 781 263
          </p>
          <p>
            <span>Capital:</span> Wajir
          </p>
        </Card>
        <Card className={selectedCounty === "mandera" ? "visible" : "hidden"}>
          <h1>
            Mandera <span>(MDR)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_Mandera_County%2C_Kenya.svg"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 25 797 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 867 457
          </p>
          <p>
            <span>Capital:</span> Mandera
          </p>
        </Card>
        <Card className={selectedCounty === "marsabit" ? "visible" : "hidden"}>
          <h1>
            Marsabit <span>(MRS)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Marsabit_County.png"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 66 923 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 459 785
          </p>
          <p>
            <span>Capital:</span> Marsabit
          </p>
        </Card>
        <Card className={selectedCounty === "turkana" ? "visible" : "hidden"}>
          <h1>
            Turkana <span>(TRK)</span>
          </h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Turkana_County.gif"
            alt="flag"
            width="500"
          />
          <p>
            <span>Area:</span> 98 597 km<sup>2</sup>
          </p>
          <p>
            <span>Population:</span> 1 504 976
          </p>
          <p>
            <span>Capital:</span> Lodwar
          </p>
        </Card>
      </div>
      <Wrapper>
        <Select
          defaultValue="all-counties"
          options={options}
          onChange={handleChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="457.63434"
          height="580.54065"
        >
          <Popover
            title="Mombasa (MSA)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Mombasa.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 212 km<sup>2</sup>
                </p>
                <p>Population: 1 208 333</p>
                <p>Capital: Mombasa</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 324.53705,546.78063 0,0 -0.43,0.09 0.26,-0.21 0.17,0.12 z m 3.27,-3.23 0,0 0.41,0.73 -0.14,0.32 0.36,-0.43 1.25,0.63 -0.2,0.84 -1.71,3.27 -0.9,-0.58 0.71,-1.39 -0.36,-0.03 -1.33,-1.78 -0.73,0.72 -0.01,0.77 -0.51,0.1 0.39,-0.66 -0.52,-0.9 0.3,-0.37 -0.15,-0.45 0.41,-0.42 0.21,0.14 -0.22,-0.46 0.48,-0.03 0.09,0.23 0.24,-0.23 0.04,0.23 0.52,-0.16 0.25,0.44 -0.29,-0.67 0.63,0.17 0.45,-0.21 0.07,-0.54 0.26,0.72 z m 0.33,-1.46 0,0 -0.09,-0.11 0.1,0.04 -0.01,0.07 z m 0.96,-0.42 0,0 0.56,0.31 -0.32,0.24 0.13,0.32 0.31,0 -0.09,0.49 0.42,0.91 -0.7,0.51 -0.43,-0.25 -0.02,-0.39 -0.03,0.24 -0.81,-0.68 -0.39,-1.12 1.37,-0.58 z m 0.12,-2.06 0,0 -0.12,-0.13 0.15,-0.12 -0.03,0.25 z m -2.96,-1.82 0,0 -0.16,-0.06 0.17,-0.03 -0.01,0.09 z m 1.9,-0.1 0,0 0.41,0.05 -0.19,0.37 0.48,0.91 -0.1,0.24 -0.45,-0.13 0.11,-0.36 -0.85,-0.53 -0.42,0.6 -0.84,-0.42 0.26,-0.8 0.45,0.22 0.74,-0.35 0.4,0.2 z m -2.56,0.36 0,0 0.24,-0.08 0.04,0.65 -0.63,0.56 0.85,-0.26 0.19,0.23 -0.19,0.14 0.7,0.16 -0.05,0.34 0.27,-0.47 0.41,0.07 0.28,2.14 0.56,0.06 -0.09,0.27 -0.62,-0.09 -0.15,0.29 0.23,0.3 -3.11,0.13 0.19,-1.11 -0.76,0.02 -0.41,-0.33 0.03,-1.45 0.37,-0.43 -0.36,-0.58 0.89,-0.46 0.85,-1.14 0.44,0.32 -0.17,0.72 z m 4.77,-2.41 0,0 0.57,0.02 -0.34,0.56 0.29,-0.14 0.06,0.51 0.61,0.29 -0.49,0.21 -0.66,-0.3 -0.03,0.36 0.83,-0.01 -0.13,0.25 0.5,-0.22 -0.23,0.32 0.31,0.17 0.05,-0.68 0.84,0.32 0.68,-0.25 1.58,0.56 -2.03,2.32 -0.18,0.73 0.25,0.46 -1.54,2.06 -0.82,0.38 -0.46,-0.46 -0.01,-0.67 -0.42,-0.09 0.19,-0.49 -0.31,-0.1 -0.1,-0.4 0.28,-0.09 0.04,-0.46 -0.12,0.41 -0.68,-0.07 0,-0.44 0.6,-0.38 -0.25,-0.6 0.32,-0.44 -0.25,-0.14 -0.02,-0.78 -0.19,0.48 -0.23,-0.44 0.12,-1.35 -0.22,-0.2 -0.13,0.63 -0.47,-0.26 0.27,-0.47 -0.18,-0.55 -0.44,-0.27 0,-0.31 1.64,-0.25 0.9,0.27 z"
              title="Mombasa"
              id="KE-28"
              className={selectedCounty === "mombasa" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kwale (KWL)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Kwale_County_Flag.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 8 270 km<sup>2</sup>
                </p>
                <p>Population: 866 820</p>
                <p>Capital: Kwale</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 314.37705,580.29063 0,0 -0.16,-0.09 0.21,-0.07 -0.05,0.16 z m -0.28,-1 0,0 -0.1,-0.07 0.12,-0.02 -0.02,0.09 z m -0.15,0 0,0 -0.18,-0.07 0.08,-0.04 0.1,0.11 z m -1.96,-1.71 0,0 1.61,0.21 0.33,-0.22 0.27,0.78 -0.23,0.14 -0.86,-0.42 -1.38,0 0.23,-0.22 -0.2,-0.39 0.23,0.12 z m -7.64,-0.21 0,0 0.08,-0.29 0.09,0.12 -0.17,0.17 z m -0.73,-0.39 0,0 -0.06,-0.18 0.22,0.11 -0.16,0.07 z m 0.66,0.19 0,0 -0.39,-0.31 0.24,-0.12 0.15,0.43 z m -0.54,-0.46 0,0 -0.04,-0.02 0.04,-0.1 0,0.12 z m 0.71,-0.11 0,0 -0.21,0.03 0.12,-0.22 0.09,0.19 z m 0.31,-0.54 0,0 -0.09,-0.06 0.13,-0.29 -0.04,0.35 z m 0.45,-0.43 0,0 -0.22,-0.13 -0.01,-0.37 0.23,0.5 z m 0.29,-0.28 0,0 -0.11,-0.11 0.46,-0.27 -0.35,0.38 z m 0.8,-0.27 0,0 -0.3,-0.07 -0.07,-0.1 0.37,0.17 z m 1.43,-0.93 0,0 0.11,0.27 -0.31,-0.25 0.1,-0.41 0.1,0.39 z m 6.84,-1.09 0,0 -0.54,0.03 0.53,-0.18 0.01,0.15 z m -0.48,-0.12 0,0 -0.23,-0.08 0.15,0 0.08,0.08 z m -5.25,0.01 0,0 -0.41,0.9 -0.22,-0.85 0.52,-0.21 0.11,0.16 z m 5.33,-0.11 0,0 -0.08,-0.08 0.08,0 0,0.08 z m 0.71,-0.12 0,0 -0.09,-0.1 0.1,-0.06 -0.01,0.16 z m 2.18,-0.66 0,0 -0.01,0.89 -0.71,0.85 -0.26,-0.07 -0.16,-1.43 -0.43,-0.44 0.29,0.24 0.07,-0.45 0.1,0.24 0.64,0.16 0.44,-1.52 0.47,0.26 -0.06,0.92 -0.38,0.35 z m 4.57,-6.57 0,0 -0.08,-0.19 0.22,-0.1 -0.14,0.29 z m -12.26,-50.46 0,0 0.45,1.35 0.68,0.2 0.48,0.54 -0.26,2.03 0.33,0.08 0.35,0.9 -0.04,2.27 -0.22,-0.02 -0.18,0.52 0.37,0.31 0.19,1.16 0.92,0.73 1.05,-0.23 0.04,1.7 -0.64,0.31 0.42,0.24 0.04,0.37 -0.75,0.48 0.11,0.97 1.11,0.97 0.28,-0.23 0.33,0.16 0.73,-0.16 1.42,1.61 1.2,0.59 1,1.28 0.62,0.23 0.33,0.98 1.15,0.85 -0.16,0.26 0.18,0.41 0.42,0.11 -0.15,0.93 1.08,1.33 -0.09,1.27 0.64,-0.47 0.78,0.56 0.15,0.59 -0.41,0.94 0.79,1.01 0.12,2.76 0.45,0.97 -0.57,0.98 1.05,-0.25 0.01,-0.77 0.73,-0.72 1.33,1.78 0.36,0.03 -0.71,1.39 0.88,0.59 -1.57,2.65 -0.87,3.06 -0.86,0.07 0.76,0.05 0.03,0.74 -2.79,6.8 -0.6,2.72 -0.29,-0.04 0.18,-0.89 -0.24,-0.8 -0.29,-0.22 -0.27,0.17 -0.14,-0.37 -0.12,0.2 -0.52,-0.15 -0.12,1.22 0.17,-0.29 0.15,0.27 -0.2,0.89 -0.38,0.3 -0.7,-0.12 0.56,0.26 -0.12,1.29 -1.16,1.17 -0.81,2.52 -0.22,-0.11 -0.07,-0.61 -0.8,-0.82 -0.28,0.78 -0.6,-0.33 -0.3,0.19 0.24,1.07 -0.65,-0.08 -0.32,0.92 -0.25,-0.14 -0.82,0.4 0.09,-0.52 -0.89,0 -0.09,-0.21 -0.06,0.88 0.64,0.42 0.15,1.54 0.34,-0.48 -0.28,0.79 0.78,2.76 -1.34,0.14 -1.8,-0.6 -1.09,0.35 -0.53,-0.53 -0.09,0.18 -0.06,-0.25 -0.18,0.2 -0.23,-0.13 -0.06,-0.52 0.28,-0.53 0.33,0.27 0.02,-0.37 0.33,0.06 -0.41,-0.57 -0.57,0.25 0.68,-0.69 -0.24,-0.23 0.15,-0.82 0.63,-0.65 0.35,0.08 -0.16,-0.43 -0.57,0.09 -0.57,-0.51 0.33,0.69 -1.39,0.16 -0.88,0.99 -0.12,-0.28 -0.16,0.3 -0.18,-0.34 -0.52,0.22 -1,-0.87 -0.15,0.14 0.57,1.3 0.97,0.45 -0.36,0.16 -0.27,-0.3 -0.55,0.89 0.03,-0.54 -0.21,-0.09 -0.41,0.83 -0.23,-0.29 -0.45,0.27 0.37,0.21 -0.37,0.13 -0.2,0.54 0.56,-0.03 -0.84,0.15 -0.39,0.76 0.16,0.33 0.4,-0.1 -0.28,0.7 -0.29,-0.2 0.14,0.34 0.33,0.27 0.36,-0.29 -0.41,0.67 -0.66,-0.11 -0.24,-0.52 -0.48,0.08 -0.15,-0.53 -42.58,-29.86 28.52,-10.22 5.24,-11.41 -6.26,-3.69 2.15,-3.64 5.5,3.29 1.77,-7 11.87,0.07 1.09,-0.26 z"
              title="Kwale"
              id="KE-19"
              className={selectedCounty === "kwale" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Taita Taveta (TVT)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Taita_Taveta_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 17 083 km<sup>2</sup>
                </p>
                <p>Population: 340 671</p>
                <p>Capital: Wundanyi</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 265.18705,481.59063 0,0 1,0.39 1.17,0.04 0.58,0.65 0.84,-0.22 -0.04,0.63 1.98,0.37 1.07,0.95 0.22,0.61 1.8,-0.15 0.6,-0.28 1.62,0.64 2.22,0.05 0.32,0.27 1.67,0.25 -0.09,0.35 -0.57,0.1 0.44,0.43 1.68,-0.48 0.39,-0.39 0.32,0.44 0.92,-0.2 1.72,-1.08 1.21,0.35 0.96,-0.25 0.3,-0.33 2.07,0.34 0.44,-0.07 0.65,-0.76 1.95,-0.32 0.47,0.22 0.51,-0.19 0.03,0.55 0.91,0.56 1.03,0.1 0.07,0.45 0.34,0.15 0.13,-0.54 0.87,-0.41 0.48,-0.66 0.89,-0.31 0.33,1.28 0.45,0.02 0.14,0.42 0.49,-0.24 0.69,1.19 0.32,-0.03 0.33,-0.48 0.42,0.37 0.78,-0.13 1.28,0.44 -8.95,35.54 -5.5,-3.29 -2.15,3.65 6.25,3.68 -5.23,11.41 -28.51,10.22 -37.89,-26.58 -1.32,-3.22 -0.95,-4.27 -0.94,-0.31 -0.41,-0.48 -1.37,-0.17 -0.7,-0.87 -0.85,-0.26 -2.84,0.7 -0.87,0 -0.15,-0.5 0.62,-0.68 0.56,-2 -0.22,-0.31 -0.55,0.16 -0.66,-0.25 -0.73,0.23 0,-1.23 4.38,-4.77 1.04,-0.14 0.28,-0.36 0,-1.51 1.53,-0.69 -1.18,-7.39 5.89,-0.38 0.61,-0.37 1.02,0.45 0.63,0.68 1.13,-0.42 0.07,-5.7 0.95,-0.07 1.39,-10.96 1.33,-1 1.21,-5.24 1.96,0.67 7.72,-4.13 1.08,-1 1.33,0.01 0.61,-1.1 0.32,0.83 5.91,4.33 2.82,3.61 1.79,3.08 1.73,1.79 0.84,0.53 0.71,0.05 1.18,1.57 1.11,0.94 0.5,1.03 1.75,-0.73 0.26,0.34 1.18,-0.01 0.33,-0.48 1.12,-0.07 0.43,0.35 z"
              title="Taita Taveta"
              id="KE-39"
              className={
                selectedCounty === "taita-taveta" ? "map active" : "map"
              }
            />
          </Popover>
          <Popover
            title="Kilifi (KLF)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Kilifi_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 12 245 km<sup>2</sup>
                </p>
                <p>Population: 1 453 787</p>
                <p>Capital: Kilifi</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 346.49705,505.25063 0,0 -0.11,-0.05 0.06,-0.02 0.05,0.07 z m 0.63,-1.62 0,0 -0.07,-0.29 0.41,-0.14 -0.34,0.43 z m -0.88,-0.45 0,0 -0.27,0.49 -0.64,-0.27 0.81,-0.2 0.12,-0.37 -0.02,0.35 z m 1.32,-0.41 0,0 -0.06,-0.09 0.07,-0.07 -0.01,0.16 z m -0.74,0.08 0,0 -0.37,-0.2 0.11,-0.55 0.26,0.75 z m 11.07,-21.23 0,0 -0.07,-0.1 0.37,-0.41 -0.3,0.51 z m 0.53,-0.31 0,0 -0.39,-0.89 0.35,0.48 0.04,0.41 z m -0.9,-0.31 0,0 -0.21,-0.38 0.14,-0.46 0.07,0.84 z m 0.16,-1.79 0,0 -0.05,0.51 -0.2,-1.09 0.55,-1.76 -0.44,1.7 0.14,0.64 z m 0.35,-3.26 0,0 -0.18,-0.54 0.2,-0.29 -0.02,0.83 z m 0.83,-3.83 0,0 -0.15,-0.14 0.12,-0.15 0.03,0.29 z m -0.25,-0.33 0,0 -0.08,-0.07 0.08,-0.02 0,0.09 z m -0.36,-1.16 0,0 -0.02,0.27 -0.32,-0.38 0.34,0.11 z m -0.48,-0.04 0,0 -0.28,-0.39 0.24,-0.01 0.04,0.4 z m 0.97,-0.34 0,0 0.08,-0.61 0.1,0.12 -0.18,0.49 z m -0.5,-0.29 0,0 0,-0.31 0.14,-0.1 -0.14,0.41 z m 0.11,-0.61 0,0 -0.01,-0.13 0.31,-0.28 -0.3,0.41 z m 0.56,-0.7 0,0 0.2,-0.61 0.14,-0.02 -0.34,0.63 z m 0.03,-0.42 0,0 -0.04,-0.09 0.09,-0.23 -0.05,0.32 z m -0.21,-0.07 0,0 -0.48,0.04 0.36,-0.35 0.12,0.31 z m -0.78,-0.34 0,0 -0.13,-0.07 0.15,-0.15 -0.02,0.22 z m 0.19,-0.32 0,0 -0.15,-0.07 0.05,-0.12 0.1,0.19 z m 0.33,-0.56 0,0 0.17,0.39 -0.36,0.4 0.16,-1.21 0.03,0.42 z m -0.13,-0.58 0,0 -0.14,0.2 -0.62,-0.08 0.16,0.8 -0.49,-0.03 0.46,0.82 0.3,0.15 0.12,-0.26 0.11,0.88 -0.39,0.55 -0.28,-0.55 0.07,0.58 -0.23,0.08 0.37,0.11 0.04,0.44 -0.49,-0.04 0.12,0.46 -0.28,0.24 0.31,0.13 0.15,0.46 0.26,-0.43 0.75,1.39 -0.14,0.68 0.18,-0.13 0.12,0.21 -0.54,0.5 0.09,0.34 -0.34,0.81 0.05,-0.36 -0.15,0.17 -0.34,1.42 -0.29,0 -0.13,-0.76 -0.14,1.3 -0.27,-0.17 -0.2,0.29 0.22,0.5 1.22,-0.68 -0.43,1.35 -0.36,-0.51 -0.44,0.33 -0.01,0.51 0.67,-0.2 -0.12,1.31 -0.45,0.16 0.15,1.36 -0.28,2.61 0.24,-0.12 -0.49,0.49 0.11,1.62 0.38,-0.27 -0.26,-0.19 0.44,-0.5 0.24,0.33 0.31,-0.12 0.15,-0.79 0.64,-0.43 0.37,-1 0.91,-0.22 1.03,0.15 1.05,-0.93 0.25,0.52 -0.21,0.51 -0.31,-0.2 -0.6,0.49 -0.96,0.25 -0.54,0.66 -0.05,0.64 -0.78,0.27 -0.5,0.52 -0.2,0.6 0.2,0.78 -1.08,1.14 0.32,0.72 0.07,1.9 -1.32,1.6 -0.7,-0.56 0.38,0.53 -0.08,0.39 0.21,-0.08 -0.76,1.29 -0.2,1.01 0.62,1.06 -0.12,1.42 0.33,0.52 -0.67,1.86 -3.8,2.66 -1.62,0.8 -0.02,0.29 -0.6,0.1 -0.02,0.32 -0.42,-0.07 -1.82,1.6 -0.3,-0.09 0.12,-0.65 0.64,-0.47 0.55,0.13 0.26,-0.21 -0.35,-0.08 0.13,-0.71 -0.54,-1.05 0.74,-1.09 -2.66,1.03 0.31,0.59 -0.44,0.4 -0.37,-0.17 -0.22,0.2 0.14,0.9 -0.31,0.32 0.53,0.25 -0.47,0.73 0.63,-0.6 0.31,0.42 0.75,0.22 0.12,1.1 -2.32,4.8 -1.46,4.33 -1.96,3.76 -1.29,-0.05 -1.71,-1.66 -1.28,0.14 -0.11,-0.2 -0.11,0.35 -0.36,0.06 -0.25,-0.86 0.23,0.07 -0.06,-0.55 0.39,-0.12 -0.07,-0.27 -0.82,0.61 -0.01,0.47 0.49,0.75 1.33,0.05 0.05,0.43 0.3,0.14 -0.74,0.28 -0.37,-0.41 -0.58,0.16 0.76,0.6 0.14,0.71 0.32,-0.25 0.25,0.44 0.75,-0.1 0.42,-0.69 0.17,0.21 0.45,-0.47 0.41,0.39 1.02,0.23 0.32,0.71 -0.12,1.29 -0.6,0.17 -0.91,-0.2 0.91,0.29 0.6,-0.17 0.27,0.97 -1.49,3.91 -0.81,3.25 -3.29,7.07 -1.17,0.71 -0.9,-0.49 -0.59,0.24 -0.68,-0.18 -0.23,-0.39 0.1,-0.49 -0.46,-0.49 0.84,-1.49 -0.01,-0.22 -0.31,0.04 -0.21,0.68 -0.76,0.37 -0.25,-0.29 -0.12,0.88 -1.05,-0.18 -1.64,0.25 0.06,0.49 0.37,0.09 0.19,0.55 -0.37,0.33 0.19,0.54 -0.51,-0.13 -0.74,0.35 -0.47,-0.42 -0.63,0.22 -0.59,-0.63 -0.85,1.14 -0.86,0.41 0.33,0.63 -0.38,0.43 -0.77,-0.56 -0.64,0.47 0.09,-1.27 -1.08,-1.33 0.15,-0.93 -0.42,-0.11 -0.28,-1 -0.89,-0.52 -0.33,-0.98 -0.62,-0.23 -1,-1.28 -1.2,-0.59 -1.42,-1.61 -0.73,0.16 -0.33,-0.16 -0.28,0.23 -1.11,-0.97 -0.11,-0.97 0.75,-0.48 -0.04,-0.37 -0.42,-0.24 0.64,-0.31 -0.04,-1.7 -1.05,0.23 -0.92,-0.73 -0.19,-1.16 -0.37,-0.31 0.18,-0.52 0.22,0.02 0.04,-2.27 -0.35,-0.9 -0.33,-0.08 0.26,-2.03 -0.48,-0.54 -0.68,-0.2 -0.45,-1.35 -1.09,0.26 -11.87,-0.07 7.22,-28.51 38.37,-43.45 16.35,23.1 z"
              title="Kilifi"
              id="KE-94"
              className={selectedCounty === "kilifi" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Lamu (LMU)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Lamu_County_Flag.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 6 497 km<sup>2</sup>
                </p>
                <p>Population: 143 920</p>
                <p>Capital: Lamu</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 389.06705,442.41063 0,0 0.36,0.14 -0.04,0.37 -0.47,-0.23 -0.02,-0.39 0.17,0.11 z m 3.99,-0.52 0,0 -0.32,0.03 0.39,-0.46 -0.07,0.43 z m -1.34,-0.54 0,0 -0.09,-0.16 0.14,0.09 -0.05,0.07 z m 1.64,0.07 0,0 -0.01,-0.33 0.17,0.1 -0.16,0.23 z m -1.68,-0.82 0,0 0.54,-0.04 -0.72,0.28 -0.09,-0.37 0.27,0.13 z m -0.78,-0.47 0,0 0.24,0.1 -0.09,0.24 -0.39,-0.18 0.24,-0.16 z m -1.14,0.05 0,0 -0.12,-0.12 0.07,-0.01 0.05,0.13 z m 9.53,-0.47 0,0 1.34,2.38 -0.11,0.3 -2.55,0.13 -3.12,1.97 -0.04,-1.94 0.19,0.02 0.06,-0.88 0.32,-0.43 1.25,0.15 -0.63,-0.61 0.48,-0.52 1.3,-0.03 0.21,-0.29 0.12,0.27 0.52,-0.54 0.48,-0.16 0.18,0.18 z m -4.31,0.18 0,0 0.45,-0.47 -0.15,0.33 -0.3,0.14 z m -0.22,-0.44 0,0 0.05,-0.13 0.17,-0.02 -0.22,0.15 z m 0.2,-0.55 0,0 0.01,0.13 -0.4,0.05 0.39,-0.18 z m 6.65,-0.21 0,0 -0.15,-0.12 0.13,0 0.02,0.12 z m 0.55,-0.09 0,0 -0.1,-0.1 -0.01,-0.12 0.11,0.22 z m 2.51,-0.25 0,0 0.27,-0.03 0.08,0.28 -0.55,-0.29 0.2,0.04 z m -0.75,-0.11 0,0 0.87,2.08 -0.84,0.85 -1.05,1.93 -0.95,0.52 -1.13,-0.05 -0.33,-0.44 0.49,-0.66 0.09,0.26 0.16,-0.34 0.66,-0.32 1.04,0.32 0.5,-0.96 -0.55,0.42 -0.57,-0.35 -0.59,0.15 -0.37,-0.2 -1.05,-1.47 -0.44,-1.72 0.81,0.12 0.46,0.44 0.07,-0.17 0.16,0.44 0.56,0.01 -0.36,1.02 0.43,0.27 0.17,-0.18 -0.33,-0.24 0.73,-0.91 -0.15,-0.39 0.53,0.03 0.46,0.58 -0.51,0.51 0.31,0.4 0.76,-0.46 -0.27,-0.28 0.23,-0.6 -0.44,-0.47 0.21,-0.26 0.23,0.12 z m 0.26,-3.49 0,0 -0.06,-0.03 0.03,-0.07 0.03,0.1 z m 4.63,-0.1 0,0 -0.72,-0.04 -0.15,-0.44 0.68,-0.12 0.34,0.3 -0.15,0.3 z m -4.13,-1.05 0,0 0.19,0.27 -0.79,0.34 0.18,-0.55 0.42,-0.06 z m 2.33,-0.08 0,0 -0.41,0.05 0.15,-0.27 0.26,0.22 z m 3.02,-0.52 0,0 0.18,0.23 -0.24,-0.05 0.06,-0.18 z m -4.77,-1.92 0,0 -0.22,-0.13 0.16,-0.15 0.06,0.28 z m 0.04,-0.4 0,0 0.14,0.09 -0.15,-0.01 0.01,-0.08 z m 8.18,0.81 0,0 0.44,-0.2 0.36,0.45 -0.66,0.29 -0.87,-0.4 -0.11,-0.3 0.28,-0.23 0.06,-0.62 0.31,0.21 -0.13,0.58 0.32,0.22 z m -4.95,-1.05 0,0 0.41,0.32 -0.51,0.93 -0.94,0.08 -0.92,0.94 -0.61,0.02 0.47,0.45 -0.22,0.25 -0.95,0.04 -0.66,-0.39 -0.08,-0.81 -0.75,-0.2 0.21,-0.56 0.95,-0.33 0.32,0.03 -0.09,0.51 0.63,0.46 0.06,-1.11 0.76,0.25 0.58,-0.54 0.79,-0.23 -0.03,-0.2 0.58,0.09 z m 1.83,-1.91 0,0 0.67,0.22 -0.11,-0.31 0.28,-0.06 0.98,0.97 -0.15,-0.46 0.31,-0.11 0.7,0.62 -0.29,0.27 0.83,-0.13 -0.43,-0.45 0.17,-0.07 0.53,0.43 0.85,0.18 0.13,0.52 -0.73,0.8 -0.11,-0.35 -0.58,0.36 -0.23,-0.77 -1.45,-0.07 -0.56,0.98 -0.3,0.01 0.67,0.42 0.16,0.51 -0.24,0.53 0.53,0.35 -0.55,0.48 -1.1,-0.16 0.28,-0.24 -0.32,-0.08 -0.05,-0.59 0.48,-0.2 -0.13,-0.27 -0.15,0.33 -0.32,-0.03 -0.08,-0.31 -0.29,0.1 0.28,0.4 -0.69,0.33 0.53,0.13 -1.16,0.42 -0.65,-0.07 0.45,-0.2 0.27,-0.62 -0.31,-0.02 0.28,-1.18 0.61,-0.05 -0.51,-0.82 0.96,-0.36 0.35,-0.65 -0.31,-0.23 0.41,-0.71 0.09,0.21 z m 1.44,0.06 0,0 -0.16,-0.16 0.15,-0.14 0.01,0.3 z m -0.3,-0.13 0,0 -0.13,-0.21 0.15,0.06 -0.02,0.15 z m -7.65,-0.2 0,0 0.11,0.16 -0.38,0.02 0.13,-0.58 0.14,0.4 z m 13.19,-2.58 0,0 0.35,0.1 0.3,0.6 -0.72,-0.38 0.07,-0.32 z m -1.35,-0.96 0,0 -0.22,0.24 0.02,-0.27 0.2,0.03 z m -1.23,-0.58 0,0 0.32,0.1 -0.04,0.39 -0.31,0.07 -0.13,-0.29 -0.11,0.28 -0.58,-0.1 0.44,-0.16 0.13,-0.35 0.28,0.06 z m 1.69,0.35 0,0 -0.3,-0.41 0.34,-0.32 -0.04,0.73 z m 5.27,1.12 0,0 -1.31,1.57 -0.36,0.06 1.37,-2.01 1.76,-1.73 -1.46,2.11 z m -1.52,-2.38 0,0 0.1,0.1 -0.4,-0.15 0.3,0.05 z m -0.75,-0.17 0,0 0.29,0.14 -0.39,-0.07 0.1,-0.07 z m 0.24,-0.1 0,0 0.02,0.11 -0.24,-0.08 0.22,-0.03 z m -4.5,0.18 0,0 0.01,0.24 0.52,-0.21 0.14,0.36 -1.86,0.22 0.32,-0.61 0.17,0.15 0.17,-0.28 0.37,0.13 0.2,-0.22 -0.04,0.22 z m 4.12,-0.12 0,0 -0.11,-0.12 0.15,-0.01 -0.04,0.13 z m 2.31,-0.56 0,0 0.17,0.2 -0.28,0.44 0.11,-0.64 z m -0.72,0.09 0,0 -0.13,-0.11 0.28,-0.02 -0.15,0.13 z m -4.48,0.01 0,0 -0.07,0.22 -0.19,-0.24 0.21,-0.24 0.05,0.26 z m 1.27,-0.99 0,0 -0.15,-0.1 0.21,-0.17 -0.06,0.27 z m 1.42,-0.13 0,0 -0.13,-0.29 0.15,0.18 -0.02,0.11 z m 6.3,-0.18 0,0 -1.08,1.05 0.77,-1.21 0.31,0.16 z m -7.42,-0.18 0,0 -0.25,0.08 0.11,-0.16 0.14,0.08 z m 1.48,0.07 0,0 0.02,-0.2 0.19,-0.03 -0.21,0.23 z m -0.92,-0.32 0,0 -0.12,-0.13 0.19,-0.12 -0.07,0.25 z m -0.77,-0.23 0,0 0.08,0.27 -0.3,0.09 -0.02,-0.32 0.24,-0.04 z m 7.85,0.03 0,0 -0.58,0.25 0.25,-0.33 0.33,0.08 z m -7.89,-0.36 0,0 0.19,0.05 -0.23,0.17 0.04,-0.22 z m 9.11,-0.06 0,0 -0.03,-0.04 0.07,-0.04 -0.04,0.08 z m -1.11,0.77 0,0 0.47,-0.85 0.23,0.01 -0.7,0.84 z m -7.05,-0.51 0,0 0.13,-0.35 0.37,0 -0.5,0.35 z m 7.95,-0.31 0,0 -0.04,-0.04 0.16,-0.07 -0.12,0.11 z m 0.48,-0.73 0,0 0.2,-0.44 0.19,0.03 -0.39,0.41 z m 1.44,-2.2 0,0 0.2,0.13 -0.53,0.22 0.33,-0.35 z m 2.26,-1.06 0,0 -3.07,2.81 1.51,-1.94 1.06,-0.57 0.22,-0.38 0.28,0.08 z m 0.1,-0.08 0,0 -0.05,-0.08 0.09,-0.1 -0.04,0.18 z m 0.58,-0.66 0,0 -0.04,-0.04 0.06,-0.1 -0.02,0.14 z m -0.74,0.01 0,0 -0.05,-0.11 0.14,-0.18 -0.09,0.29 z m 0.87,-0.27 0,0 0.17,-0.48 0,0.2 -0.17,0.28 z m 1.3,-0.89 0,0 -0.09,-0.02 0.16,-0.19 -0.07,0.21 z m 0.53,-1.03 0,0 -0.06,-0.01 0.05,-0.14 0.01,0.15 z m 0.08,-0.2 0,0 -0.07,-0.01 -0.01,-0.08 0.08,0.09 z m 1.07,-1.53 0,0 -0.61,0.78 0.33,-0.81 0.75,-0.38 -0.47,0.41 z m 0.3,-0.44 0,0 -0.1,-0.34 0.17,0.23 -0.07,0.11 z m -5.07,3.94 0,0 0.2,0.01 -0.38,0.62 -1.3,1.02 -0.16,0.34 0.19,0.11 -0.46,0.51 -0.21,0.09 -0.36,-0.5 -0.65,0.29 -0.02,0.23 0.64,-0.2 0,0.25 0.46,0.22 0.27,-0.2 -1.65,1.48 -0.57,1.11 -0.67,0.17 -0.91,1.2 -0.01,0.51 -0.56,0.38 -0.11,0.63 -0.03,-0.39 -0.44,0 -0.49,0.8 -1,0.78 -0.13,-1.09 0.43,-0.5 -0.14,-0.88 -0.7,-0.25 -0.18,0.25 -0.13,-0.37 -0.38,0.4 -0.34,-0.11 0.17,0.37 -0.35,0.15 0.11,0.32 -0.71,-0.14 0.31,-0.32 -0.3,0 0,-0.34 0.4,0.02 -0.03,-0.3 0.52,-0.33 -0.21,-0.82 0.19,-0.28 -0.77,0.6 0.14,-0.66 -0.3,0.23 0.04,-0.63 -1,0.57 0.35,-0.77 -0.28,-0.1 0.33,-0.44 -0.92,0.63 -0.44,0 -0.28,0.6 -0.77,0.62 -0.24,-0.1 -0.09,0.46 -0.31,-0.19 0.01,0.34 -0.56,0.15 0.11,0.42 -0.94,0.87 0.07,-0.31 -0.84,0.75 -0.35,-0.09 -0.12,0.35 -0.22,-0.35 -0.2,0.72 -0.33,-0.69 -0.97,0.5 -0.21,-0.15 -1.27,0.87 -0.24,-0.14 0.05,0.47 -0.35,-0.01 0.15,0.43 -0.22,0.22 0.25,0.19 -0.26,0.03 0.03,0.65 -0.13,-0.52 -0.27,-0.01 -0.19,0.44 -0.45,0.23 0.05,0.31 -0.66,1.1 -0.56,-0.3 -0.05,0.34 -0.48,0.35 -0.28,-0.36 0.22,-0.43 -0.2,-0.3 -0.87,0.42 -0.17,-0.8 -0.38,-0.32 0.44,-0.35 -0.39,-0.94 0.24,-0.62 0.26,0.06 -0.13,-1.36 0.22,-0.07 -0.61,-0.71 0.29,-0.06 0.9,-1.5 0.18,0.25 0.08,-0.36 0.28,0.12 -0.05,-0.67 0.49,-0.17 0.22,0.22 0.15,-0.44 0.94,-0.72 0.21,0.11 -0.08,-0.35 0.32,-0.27 -0.38,-0.77 -0.24,-0.02 -0.27,0.66 -0.96,0.87 -0.48,-0.1 -0.2,0.3 -0.26,-0.55 0.01,0.48 -0.39,0.38 0.28,0.13 -0.64,0.31 0.19,0.16 -0.42,-0.02 -0.35,-0.39 0.27,0.63 0.41,0.11 -0.24,0.46 -0.26,0.07 -0.47,-0.38 0.27,0.44 -0.34,0.05 -0.73,0.94 0.2,0.04 0.02,0.73 0.41,0.11 -0.37,0.79 0.24,0.54 -0.41,0.47 0.02,0.49 -0.21,-0.36 0.13,0.57 -0.68,1.29 0.38,0.21 0.05,0.65 0.21,0.01 -0.17,0.73 0.26,0.55 -0.22,0.36 -0.37,-0.38 -0.17,0.35 0.25,0.26 -0.33,0.09 -0.26,-0.04 -0.36,-0.78 0.37,-0.57 -1.16,-1.06 0.13,-0.14 -0.33,-0.03 0.4,-0.48 0.27,0.17 -0.27,-0.35 0.43,0.03 0.15,-0.61 -0.89,-0.06 -0.32,-0.91 -1.02,-0.07 0.29,-0.44 -0.44,0.08 -0.16,0.48 -0.33,-0.05 0.46,-0.19 -0.9,0.01 -0.28,-0.35 0.36,-0.71 -0.35,0.06 -0.03,-1.18 -0.54,1.19 -0.67,-0.22 0.19,-0.54 -0.26,-0.69 -0.62,-0.32 0.04,-0.56 -0.28,0.55 0.5,0.87 -0.14,0.25 -0.61,-0.07 0.03,-0.24 -1.04,0.05 0.26,-0.14 -0.34,0.02 0.19,-0.42 -0.35,0.37 -0.36,-0.47 -0.93,-0.04 -0.05,-0.33 -0.23,0.3 -0.44,-0.15 -0.06,-0.36 -0.27,0.5 0.94,0.31 0.39,0.26 -0.14,0.23 0.27,-0.07 0.38,0.44 1.01,0.32 -0.29,0.35 0.52,-0.02 0.67,0.39 0.51,-0.13 0.69,0.49 -0.13,0.23 0.59,0.04 0.49,0.48 -0.05,0.23 -0.47,-0.08 -0.26,0.35 -1.46,0.07 -0.24,0.4 1.11,-0.13 0.63,0.3 0.43,-0.53 0.72,0.33 0.59,-0.17 0.17,-0.31 0.6,0.12 -0.17,2.03 -0.72,-0.54 0,-0.27 -0.58,0.03 0.38,0.3 -0.52,0.37 0.88,0.34 0.22,0.63 -0.78,-0.4 -0.41,0.57 -1.3,0.32 1.03,0.07 0,0.32 0.9,-0.84 0.03,0.33 -0.5,0.37 0.4,0.13 0.35,-0.35 0.32,0.16 0.17,-0.17 -0.12,0.76 0.48,-0.35 0.47,0.69 -0.1,2.18 0.44,1.76 -0.17,1.42 0.23,1.55 0.38,0.62 -1.31,-0.51 -0.22,-0.79 -0.14,0.24 -0.3,-0.2 -0.27,0.22 0.12,-0.76 -0.38,-0.18 -0.09,0.54 -0.67,0.27 0.53,0.15 0.23,0.55 -1.29,-0.06 1.08,0.55 -0.26,0.06 0.14,0.22 -0.51,-0.16 -0.37,0.49 0.88,0.03 -1.54,0.41 0.33,-0.32 -0.32,-0.05 -1.25,0.58 0.77,-0.7 -1.24,-0.18 -1.05,0.54 -0.07,-0.29 -0.27,0 -0.32,0.39 0.31,-0.02 0.25,0.36 -1.06,0.87 -0.19,-0.89 -0.37,0.31 -0.03,-0.56 0.23,-0.17 -0.34,0.06 -0.33,0.8 -0.29,0.01 -0.52,-0.38 -0.17,-1.08 -0.11,1.02 -0.34,-0.46 -0.41,0.02 -0.25,-1.02 -0.12,0.43 -0.27,-0.57 -0.86,-0.55 0.07,-0.27 -0.59,0.12 1.03,0.78 0.71,1.23 -0.04,0.59 -0.17,-0.23 -0.37,0.64 -0.56,0.06 -0.37,-0.31 0.3,0.47 0.85,0 0.28,0.32 0.56,-0.6 0.25,0.62 1,0.47 -0.73,-0.28 -0.32,0.67 0.63,0.31 0.29,0.64 0.09,-0.17 0.15,0.65 -0.56,-0.75 -1.29,-0.49 0.24,-0.55 -0.27,-0.25 -0.27,0.37 -0.34,-0.1 -0.09,-0.34 -0.41,-0.02 0.57,0.9 -0.55,-0.13 -0.1,-0.27 -0.77,0.58 0.72,0.29 0.04,0.86 0.36,-0.17 0.89,0.3 0.05,-0.43 1.82,0.78 0.4,1.45 -0.12,0.44 0.45,0.07 0.07,0.52 0.48,0 -0.3,0.52 -0.55,0.03 0.16,0.31 0.49,-0.07 -0.52,0.34 -0.01,0.36 -0.53,0.49 0.49,-0.32 0.26,0.28 -0.08,-0.72 0.37,0.02 0.52,-0.65 -0.06,-0.49 0.3,-0.14 -0.21,-0.8 0.52,0.28 -0.08,-0.63 0.4,0.65 0.8,0.24 0.43,0.81 -0.05,1.13 -2.64,2.08 -0.47,1.39 -1.32,-0.04 -0.8,0.39 -3.83,0.68 -12.75,-4.03 -10.93,0.03 0,-8.54 -2.38,-12.35 39.73,-18.21 37.68,-3.2 -2.42,2.37 -1.54,2.46 -0.75,0.39 -2.4,2.7 -0.51,0.28 -0.44,0.82 z"
              title="Lamu"
              id="KE-21"
              className={selectedCounty === "lamu" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Makueni (MKN)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_Makueni_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 8 008 km<sup>2</sup>
                </p>
                <p>Population: 987 653</p>
                <p>Capital: Wote</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 208.19705,399.09063 0,0 0.26,0.16 -0.25,0.35 0.68,0.28 -0.34,0.33 1,-0.01 -0.06,0.41 0.3,0.06 1.14,-0.82 0.06,0.56 1.06,0.25 0.81,1.34 0.55,-0.14 0.1,1.37 0.99,2 1.25,-1.13 0.05,-2.26 0.6,-0.15 0.19,0.22 0.26,-0.24 0.61,1.25 0.4,0.22 0.9,-0.77 -0.2,-0.83 0.73,-0.67 0.58,-0.14 0.4,0.61 0.65,0.37 1.81,3.37 -0.17,0.36 1.12,0.95 0.05,0.94 0.55,0 0.36,0.51 -0.14,1.08 0.57,0.21 0.61,2.35 -0.22,0.77 -0.62,0 -0.15,0.65 0.5,1.02 1.84,1.94 0.68,0.4 -0.4,0.82 0.2,0.41 0.75,0.22 -0.13,0.34 0.46,1.35 -0.05,0.61 0.7,0.04 -0.55,1.66 0.34,0.5 -0.06,0.7 0.92,2.09 -0.1,0.28 0.47,0.28 -0.08,0.3 0.28,0.24 -0.12,0.46 0.27,0.2 -0.28,0.59 0.69,0.18 0.27,0.7 -0.07,0.53 0.37,0.83 -0.36,3.43 0.5,0.6 0.11,1.37 3.24,-1.11 0.39,0.85 1.22,0.39 -0.08,0.64 0.36,0.36 0.29,1.14 0.6,0.43 -0.36,0.45 0.31,0.2 0.37,2.03 0.44,-0.02 0.26,0.63 0.61,0.02 0.17,0.48 0.63,0.33 -0.17,0.8 0.37,0.15 0.11,0.61 0.42,0.33 1.3,0.18 1.55,0.99 0.65,-0.02 0.74,0.85 0.76,0.09 0.65,2.55 0.55,0.11 0.25,0.46 0.5,0 0.4,0.64 1.23,0.19 0.78,3.37 0.47,0.25 0.35,0.7 0.58,0.22 -0.04,0.5 0.56,1.01 0.07,1.11 0.89,0.42 -0.39,0.46 0.41,1.19 0.5,0.22 0.86,2.78 0.31,0.25 -0.04,0.41 0.88,0.8 0.55,2.06 2.29,5.08 -0.53,0.52 -0.24,0.88 0.48,0.42 0.27,1.18 -0.21,0.59 0.67,0.34 -0.07,0.45 0.43,0.32 -0.11,0.6 0.62,0.09 -0.22,0.64 0.58,0.21 0.86,2.3 0.69,0 0.28,1.08 1.51,1.12 -0.31,0.47 -1.2,0.02 -0.26,-0.34 -1.75,0.73 -0.5,-1.03 -1.11,-0.94 -1.18,-1.57 -0.71,-0.05 -0.84,-0.53 -1.73,-1.79 -1.79,-3.08 -2.82,-3.61 -5.91,-4.33 -0.32,-0.83 -0.61,1.1 -1.33,-0.01 -1.08,1 -7.72,4.13 -1.69,-0.45 -0.93,-1.16 -0.21,-1.12 0.35,-0.99 -0.5,-1.1 -1.18,-0.11 -0.59,-1.66 -0.72,-0.81 -1.64,-3.17 -14.41,-16.77 0.49,-0.16 0.35,-0.63 0.28,-0.05 0.33,0.46 0.47,-0.22 0,-0.33 0.81,0.24 0.5,-0.66 0.86,0 -0.11,-0.41 0.24,-0.06 0.37,-0.91 -0.19,-2 0.57,-0.29 1.1,-1.54 0.56,-0.34 0.61,0.07 -0.04,-0.24 -0.93,-0.39 -0.49,-0.96 -1.95,-0.54 -2.46,0.35 -1.56,-0.43 -1.73,-1.56 -0.83,0.04 -0.44,-0.26 0.1,-0.45 -0.46,-0.47 -4.76,-1.82 -5.23,-3.49 -2.65,-0.27 -0.29,-0.26 -0.56,0.13 -1.15,-0.69 -0.21,-1 -0.64,-1.01 -1.03,-0.5 -0.59,-0.75 -2.8,-0.12 -0.28,-0.65 -0.69,-0.37 -1.04,-1.68 0.41,-0.2 0.15,-1.54 -0.42,-0.71 -0.71,-0.31 0.36,-0.41 -0.3,-0.23 0.14,-0.52 -0.23,-0.35 1.07,-1.87 2.66,-0.26 0.8,-0.34 1.36,-1.94 2.01,1.99 0.67,-0.97 0.61,-0.02 -0.86,-2 1.42,-1.03 0.43,0.45 1.52,-0.23 0.67,0.15 0.27,-0.26 0.64,0.17 2.3,-0.96 -2.87,-5.62 -1.63,-1.62 2.77,-2.4 2.98,0.74 1.67,-0.83 0.54,0.19 0.72,-0.26 1.02,0.61 0.55,-0.16 0.36,0.72 1.64,0.02 z"
              title="Makueni"
              id="KE-23"
              className={selectedCounty === "makueni" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Nairobi (NBI)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_Nairobi_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 694 km<sup>2</sup>
                </p>
                <p>Population: 4 397 073</p>
                <p>Capital: Nairobi</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 182.66705,383.30063 0,0 -0.03,0.74 -0.23,-0.1 -0.61,0.28 -0.26,0.42 -0.33,-0.01 -0.25,0.64 0.21,0.4 -2.95,-0.64 -1.27,0.5 -0.43,-1.09 -1.27,0.45 0.57,1.29 -0.21,0.27 -2.24,0.91 -2.02,1.89 0.59,0.63 0.4,0.98 1.12,0.64 0.26,1.07 0.86,0.89 -0.12,0.27 -0.81,-0.61 -0.74,0.05 -2.53,-1.06 0.21,-0.27 -0.39,-0.19 -1.26,-0.18 -0.85,-0.44 -0.32,-0.61 -0.46,0.17 -0.94,-0.46 -0.72,0.45 -0.71,-0.22 -1.15,0.2 -2.1,-0.49 -2.01,-1.57 -0.42,0.12 -0.98,-1.41 -0.19,0.09 -0.37,-0.3 0.17,-0.12 -0.53,-0.12 1.39,-2.11 0.01,-0.61 0.4,-0.36 -0.12,-0.46 1.61,0.07 0.5,-1.66 1.05,0.18 0.49,-0.84 1.18,0.51 0.81,-1.17 -0.38,-0.4 0.39,-0.64 2.42,1.34 -0.2,-0.48 1.06,0.3 0.12,-0.49 0.51,-0.05 0.15,-0.73 0.76,0.36 1.38,-0.17 -0.66,-1.17 0.63,-0.66 1.16,0.05 1.31,0.72 -1.72,1.85 0.66,0.65 1.93,0.64 1.81,-0.33 1.06,0.78 2.16,-1.54 1.03,-0.24 1.04,1.83 0.52,-0.3 0.36,0.66 -0.43,0.23 0.92,0.78 z"
              title="Nairobi"
              id="KE-30"
              className={selectedCounty === "nairobi" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kajiado (KJD)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Kajiado_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 21 292 km<sup>2</sup>
                </p>
                <p>Population: 1 117 840 </p>
                <p>Capital: Kajiado</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 138.71705,371.16063 0,0 8.89,4.19 2.54,1.9 -1.32,4.82 -1.28,1.81 9.68,1.89 0.36,0.59 -0.23,0.4 0.53,0.12 -0.17,0.12 0.37,0.3 0.19,-0.09 0.98,1.41 0.42,-0.12 1.79,1.48 2.32,0.58 1.15,-0.2 0.71,0.22 0.73,-0.45 0.93,0.46 0.46,-0.17 0.33,0.62 1.23,0.61 1.21,0.16 -0.83,3.94 0.38,0.55 2.25,-1.74 0.77,-0.18 0.76,0.11 -0.19,0.36 1.75,0.82 -0.41,0.85 0.23,0.45 -0.63,0.79 -0.21,1.52 0.26,0.47 0.96,0.49 7.51,10.07 1.33,0.52 0.51,-0.39 0.32,0.16 -0.14,0.83 0.15,0.4 0.49,0.25 -0.35,0.66 0.51,0.17 -0.54,0.79 0.05,0.42 -0.59,0.7 0.23,0.35 -0.14,0.52 0.3,0.23 -0.36,0.41 0.71,0.31 0.42,0.71 -0.13,1.48 -0.41,0.3 1.04,1.67 0.68,0.36 0.23,0.62 2.84,0.13 0.59,0.75 1.03,0.5 0.64,1.01 0.28,1.06 1.08,0.63 0.56,-0.13 0.29,0.26 2.65,0.27 5.23,3.49 4.76,1.82 0.46,0.47 -0.1,0.45 0.44,0.26 0.83,-0.04 1.73,1.56 1.56,0.43 2.46,-0.35 1.95,0.54 0.49,0.96 0.93,0.39 0.04,0.24 -0.61,-0.07 -0.56,0.34 -1.1,1.54 -0.57,0.29 0.19,2 -0.37,0.91 -0.24,0.06 0.11,0.41 -0.86,0 -0.5,0.66 -0.81,-0.24 0,0.33 -0.47,0.22 -0.33,-0.46 -0.28,0.05 -0.35,0.63 -0.49,0.16 14.41,16.77 1.64,3.17 0.72,0.81 0.59,1.66 1.18,0.11 0.5,1.1 -0.35,0.99 0.21,1.12 0.66,0.94 -1.21,5.24 -1.33,1 -1.39,10.96 -0.95,0.07 -0.07,5.68 -0.29,0.26 -0.86,0.18 -0.61,-0.68 -1.01,-0.45 -0.62,0.37 -5.89,0.38 -1.1,-6.88 -8.64,-5.87 -86.89,-48.74 0,-1.22 1.6,-0.01 0,-2.47 0.54,-1.89 -0.02,-1.98 0.24,-0.68 -0.21,-0.62 0.3,-0.61 -0.52,-1.26 0.57,-0.43 -0.98,-1.08 0.61,0.01 0.03,-0.76 0.38,0.03 0.32,-1.16 -0.07,-0.87 -0.38,-0.42 -0.15,-0.75 -0.6,0.2 0,-0.88 -0.67,-0.12 -0.07,-0.21 0.86,-1.02 0.02,-0.34 -0.58,-0.24 0.59,-0.47 0.22,-1.38 0.34,-0.22 -0.04,-0.42 0.34,0.14 0.16,-0.31 -0.12,-0.57 -0.55,-0.54 0.39,0.04 0.16,-0.3 0.5,0.34 0.07,-0.5 0.4,-0.23 -0.99,-2.82 0.28,-0.15 0.19,-1.62 0.45,-0.1 -0.05,-0.35 0.57,-0.98 0.36,0.08 0.37,-1.18 -0.09,-0.78 -1.81,-3.99 16.82,-18.02 -0.71,-7.23 z"
              title="Kajiado"
              id="KE-10"
              className={selectedCounty === "kajiado" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Machakos (MCK)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Machakos_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 5 952 km<sup>2</sup>
                </p>
                <p>Population: 1 421 932</p>
                <p>Capital: Machakos</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 192.86705,356.00063 0,0 0.3,-0.05 1.09,1.01 0.01,0.68 0.29,0.13 0.54,1.16 0.32,-0.01 -0.16,0.28 0.32,0.23 1.91,0 0.82,0.35 0.2,0.41 0.28,-0.32 0.76,0.24 0.81,-0.33 0.06,0.62 0.74,0.28 0.83,-0.21 0.35,0.45 1.54,0.32 -0.13,0.59 1.31,1.07 0.57,-0.43 0.69,0.16 0.28,0.83 0.75,-0.25 -0.04,-0.94 0.74,-0.74 0.34,0.07 0.49,-0.52 0.29,0.31 1.27,-0.13 0.23,-0.44 -0.19,-0.37 0.79,-0.1 0.21,-0.42 1.17,-0.15 0.18,-0.76 0.34,0 0.28,0.38 0.33,-0.19 0.66,0.31 0.41,-0.09 0.37,-0.96 0.55,-0.37 0.04,-1.52 0.46,0.05 0.49,-0.7 0.5,-0.18 0.97,-0.04 0.47,-0.33 0.5,0.16 0.94,2.62 1.67,-0.06 0.48,-0.29 0.56,-0.91 0.14,0.79 0.71,-0.59 0.5,0.07 0.28,0.43 0.66,-0.13 0.21,1.2 -0.44,0.2 0.19,0.34 -0.73,0.69 0,0.6 -0.3,0.14 -0.35,0.91 0.25,0.51 -0.37,0.39 0.64,0.21 0.27,0.61 0.27,-0.15 -0.04,0.59 0.23,-0.04 0.01,0.47 0.45,0.26 0.11,0.38 -0.3,0.06 -0.03,0.41 0.42,0.87 -0.18,-0.17 -0.33,0.32 0.73,0.04 0.59,0.58 -0.35,0.16 0.2,0.23 -1.09,0.7 0.17,0.63 -0.27,2.41 -0.86,1.22 -0.6,0.12 -0.11,0.57 -0.6,0.72 -0.59,1.96 -3.34,-2.84 -8.24,0.48 0.17,3.5 0.83,-0.29 0.74,0.41 2.3,4.05 1.35,1.15 -0.1,0.33 1.49,2.58 1.09,2.8 0.33,0.1 0.42,0.84 1.14,-0.12 0.55,0.36 1.23,1.52 0.1,0.49 0.34,-0.07 0.52,2.53 0.37,0.49 -1.16,0.38 -1.07,0.95 -0.39,0.88 -2.2,0.58 -1.43,-0.43 -0.87,0.57 0.42,0.58 0.64,0.07 1.11,1.85 0.99,0.75 0.2,0.63 -1.11,0.52 -0.2,0.29 0.2,0.83 -0.86,0.76 -0.44,-0.21 -0.61,-1.25 -0.26,0.24 -0.19,-0.22 -0.6,0.15 -0.05,2.26 -1.25,1.13 -0.99,-2 -0.09,-1.36 -0.56,0.13 -0.81,-1.34 -1.06,-0.25 -0.06,-0.56 -1.04,0.78 -0.37,0.01 0.06,-0.43 -1.06,-0.02 0.38,-0.28 -0.71,-0.33 0.2,-0.41 -1.83,-0.1 -0.36,-0.72 -0.55,0.16 -1,-0.61 -0.74,0.26 -0.54,-0.19 -1.67,0.83 -2.05,-0.65 -1.13,-0.06 -2.57,2.37 1.63,1.62 2.86,5.63 -2.29,0.95 -0.64,-0.17 -0.27,0.26 -0.67,-0.15 -1.52,0.23 -0.43,-0.45 -1.42,1.03 0.86,2 -0.61,0.02 -0.67,0.97 -2.01,-1.99 -1.36,1.94 -0.8,0.34 -2.66,0.26 -0.5,-0.21 0.35,-0.66 -0.53,-0.32 -0.01,-1.22 -0.36,-0.06 -0.43,0.35 -1.33,-0.52 -7.51,-10.07 -0.77,-0.29 -0.4,-0.55 0.16,-1.64 0.63,-0.79 -0.23,-0.45 0.41,-0.85 -1.75,-0.82 0.19,-0.36 -0.46,-0.14 -1.05,0.19 -1.95,1.66 -0.32,0.1 -0.38,-0.55 0.67,-3.64 2.53,1.06 0.74,-0.05 0.81,0.61 0.12,-0.27 -0.86,-0.89 -0.26,-1.07 -1.12,-0.64 -0.4,-0.98 -0.59,-0.63 2.02,-1.89 2.24,-0.91 0.21,-0.27 -0.57,-1.29 1.27,-0.45 0.43,1.09 1.27,-0.5 2.95,0.64 -0.21,-0.4 0.25,-0.64 0.33,0.01 0.26,-0.42 0.61,-0.28 0.23,0.1 0.05,-0.77 0.43,-0.1 -0.05,-0.68 0.52,-0.07 0.1,-0.63 0.88,-0.12 0.34,-0.41 0.65,-0.12 0,-0.83 0.37,-0.2 -0.24,-0.59 0.37,-0.12 1.14,-1.48 -0.12,-0.56 0.38,-1.09 -0.64,-1.29 0.73,-0.59 0.24,-0.61 1.15,-0.9 1.07,-0.24 0.79,0.27 1.32,-0.7 0.71,-0.1 1,0.31 2.58,2.64 2.66,-3.44 1.75,-1.28 -0.85,-1.22 -1.31,-0.81 -1.21,-0.68 -1.29,-0.17 -0.09,-0.41 1.67,-0.86 -0.7,-0.95 -0.99,1.09 -0.55,-0.67 0.02,-0.51 -0.47,0.18 -0.34,-0.41 0.63,-0.45 -0.38,-0.82 -2.31,-1.47 -1.47,-1.83 -1.52,-0.5 0.57,-0.89 1.28,0.12 0.28,-2.62 0.29,-0.39 0.79,-0.07 z"
              title="Machakos"
              id="KE-22"
              className={selectedCounty === "machakos" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kiambu (KMB)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Kiambu_County_Flag.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 449 km<sup>2</sup>
                </p>
                <p>Population: 2 417 735</p>
                <p>Capital: Kiambu</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 151.23705,363.77063 0,0 0.9,-0.51 -0.39,-0.41 1.44,-0.98 0.63,-1.43 -0.47,-0.74 -0.22,-1.28 1.87,0.19 -0.59,-1.38 2.4,-2.35 0.47,0.18 0.75,-0.53 0.8,0.36 1.97,2.38 1.06,0.67 0.52,0.77 1.51,0.14 1.8,1.3 1.04,0.41 0.78,0.78 1.11,0.26 0.34,0.45 0.74,0.14 0.21,0.32 0.4,-0.08 0.33,0.85 0.82,0.1 0.3,0.86 2.44,1.57 0.58,1.01 0.83,0.19 2.44,1.98 0.83,1.11 0.8,0.17 1.2,-0.45 0.83,0.45 1.16,0.12 0.53,0.31 0.4,0.68 0.53,-0.27 1.26,0.31 1.15,-0.54 0.14,-0.56 0.94,0.47 1.22,-0.47 1,-0.94 0.71,0.4 1.16,-0.47 2.61,2.81 0.27,-0.12 0.56,0.75 0.55,0.27 0.3,-0.11 0.56,0.69 0.78,0.16 -1.13,1.3 -2.58,-2.64 -0.96,-0.3 -0.75,0.09 -1.32,0.7 -0.79,-0.27 -1.15,0.28 -2.04,2.06 0.64,1.29 -0.38,1.09 0.13,0.52 -1.15,1.52 -0.37,0.12 0.24,0.59 -0.37,0.2 0.09,0.71 -0.74,0.24 -0.34,0.41 -0.88,0.12 -0.1,0.63 -0.52,0.07 -0.03,0.75 -0.37,0.06 -0.92,-0.78 0.43,-0.23 -0.36,-0.66 -0.52,0.3 -1.04,-1.83 -1.03,0.24 -2.16,1.54 -1.06,-0.78 -1.79,0.33 -1.49,-0.42 -1.12,-0.87 1.72,-1.85 -1.31,-0.72 -1.16,-0.05 -0.63,0.66 0.66,1.17 -1.38,0.17 -0.76,-0.36 -0.15,0.73 -0.51,0.05 -0.12,0.49 -1.06,-0.3 0.2,0.48 -2.42,-1.34 -0.39,0.64 0.38,0.4 -0.81,1.17 -1.18,-0.51 -0.49,0.84 -1.05,-0.18 -0.5,1.66 -1.56,-0.15 0.07,0.54 -0.4,0.36 -0.01,0.61 -1.16,1.71 -0.36,-0.59 -9.68,-1.89 1.28,-1.81 1.77,-6.47 1.27,-1.54 0.18,0.08 1.22,-2.18 -0.23,-1.08 0.55,-3.49 -0.52,-0.23 0,-1 -0.28,-0.79 -0.43,-0.33 0.32,-0.74 -0.55,-0.45 -0.41,0.16 -0.48,-0.24 z"
              title="Kiambu"
              id="KE-13"
              className={selectedCounty === "kiambu" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Migori (MGR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Migori_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 586 km<sup>2</sup>
                </p>
                <p>Population: 1 116 436</p>
                <p>Capital: Migori</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 41.74705,349.19063 0,0 0.37,2.3 -0.73,1.4 -0.73,9.78 0.81,3.7 0.53,0.16 -2.95,2.82 0.36,1.88 1.16,1.26 -0.17,0.75 0.41,1.37 0.42,0.55 0.35,1.68 -0.14,0.61 1.26,0.84 -0.06,0.59 1.03,0.69 0.12,0.66 0.88,0.15 2.4,10.2 -36.97,-20.81 -0.58,-0.08 -1.28,1.04 -0.72,0.22 -0.49,-0.4 -0.26,-1.6 -0.5,-0.47 -4.68,-0.08 -0.39,-11.36 8.73,0 0.91,-1.15 0.91,-0.24 0.58,0.28 0.73,-0.6 0.19,0.34 0.96,-0.71 0.48,0.36 0.44,-0.05 0.38,-0.65 0.72,0.29 0.62,-0.84 0.59,0.98 1.13,0.81 1.05,1.65 0.78,0.2 1.95,1.32 1.2,1.6 0.92,-0.22 0.08,-0.37 2.58,-0.5 0.63,-0.88 -0.38,-0.76 0.26,-0.16 2.39,1.3 1.78,1.39 0.72,-1.78 1.17,-1.15 -0.37,-0.67 -0.55,-0.24 0.34,-0.1 -0.08,-0.47 1.22,-0.83 -0.25,-0.29 0.27,-0.17 1.03,-0.06 0.49,-0.75 0.35,-2.38 0.97,-2.08 1.56,-0.56 0.25,0.12 -0.04,-0.5 0.97,-0.09 1.89,0.76 z"
              title="Migori"
              id="KE-27"
              className={selectedCounty === "migori" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Murang'a (MRG)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Murang%27a_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 325 km<sup>2</sup>
                </p>
                <p>Population: 1 056 640</p>
                <p>Capital: Murang`a</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 170.28705,346.02063 0,0 2.01,-0.02 0,-0.28 3.75,-1.62 0.54,0.47 1.1,0.03 0.63,0.39 1.25,0.19 0.6,0.87 2.28,1 0.1,0.53 0.5,0.24 0.76,0.14 1.01,-0.31 0.65,0.17 0.16,-0.32 0.84,0.01 0.02,0.78 0.42,0.26 0.14,0.76 1.15,-0.21 0.74,1.44 0.78,-0.9 0.63,-0.32 -0.05,0.54 0.44,0.85 -0.09,0.63 0.11,0.29 0.28,-0.02 0.3,0.74 -0.28,0.22 0.38,0.17 0.51,0.97 -0.19,0.16 0.47,0.42 -0.53,-0.18 -0.29,0.18 0.34,1.47 0.33,0.31 -0.3,0.42 -0.27,2.59 -1.28,-0.12 -0.57,0.89 1.52,0.5 1.47,1.83 2.31,1.47 0.38,0.82 -0.63,0.45 0.34,0.41 0.47,-0.18 -0.02,0.51 0.55,0.67 0.99,-1.09 0.7,0.95 -1.67,0.86 0.09,0.41 1.29,0.17 1.21,0.68 1.31,0.81 0.85,1.22 -1.75,1.28 -1.53,2.14 -0.78,-0.16 -0.56,-0.69 -0.3,0.11 -0.55,-0.27 -0.56,-0.75 -0.27,0.12 -2.61,-2.81 -1.16,0.47 -0.71,-0.4 -1,0.94 -1.22,0.47 -0.94,-0.47 -0.14,0.56 -1.15,0.54 -1.26,-0.31 -0.53,0.27 -0.4,-0.68 -0.53,-0.31 -1.16,-0.12 -0.83,-0.45 -1.2,0.45 -0.67,-0.12 -0.96,-1.16 -2.44,-1.98 -0.83,-0.19 -0.58,-1.01 -2.44,-1.57 -0.3,-0.86 -0.82,-0.1 -0.38,-0.89 -0.35,0.12 -0.21,-0.32 -0.74,-0.14 -0.34,-0.45 -1.11,-0.26 -0.78,-0.78 -1.04,-0.41 -1.8,-1.3 -1.51,-0.14 -0.52,-0.77 -1.06,-0.67 0.1,-1.07 -0.24,-0.43 0.86,-0.04 -0.83,-0.97 -0.83,-3.61 -0.11,-2.87 0.34,-1.57 -0.1,-1.95 0.87,-0.91 0.73,-0.29 0.72,0.29 1.83,-0.29 1.47,0.23 0.38,0.55 1.55,0.87 0.37,-0.1 0.89,0.83 1.49,0.08 z"
              title="Murang'a"
              id="KE-29"
              className={selectedCounty === "muranga" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kisii (KSI)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/58/Flag_of_Kisii_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 1 317 km<sup>2</sup>
                </p>
                <p>Population: 1 266 860</p>
                <p>Capital: Kisii</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 54.57705,339.83063 0,0 1.19,1.29 0.06,0.96 -0.66,1.93 0.51,0.63 -0.17,0.28 0.67,0.59 -0.19,0.83 -0.37,0.28 -0.34,-0.49 -0.21,0.48 -1.11,-1.37 -0.3,-0.03 -0.63,0.48 -0.18,0.67 -0.91,0.92 -0.35,1.15 0.15,1.02 -0.77,-0.24 -0.73,0.47 0.48,0.86 0.75,-0.17 0.74,0.34 0.23,0.77 0.67,0.19 0.97,0.96 1.95,1.24 0.49,-0.07 0.61,0.83 0.91,0.04 1.22,0.7 3.95,6.65 -19.27,4.79 -1.45,-0.46 -1.02,0.02 -0.81,-3.7 0.73,-9.78 0.73,-1.4 -0.43,-2.01 0.46,-2.09 1.01,-1.68 1.35,-0.23 1.06,-1.47 2.69,-0.96 0.9,-0.78 4.68,-1.89 0.74,-0.55 z"
              title="Kisii"
              id="KE-16"
              className={selectedCounty === "kisii" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Narok (NRK)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_Narok_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 17 921 km<sup>2</sup>
                </p>
                <p>Population: 1 157 873</p>
                <p>Capital: Narok</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 101.89705,345.79063 0,0 1.07,-1.42 0.03,-1.55 0.41,-0.03 1.22,-1.26 1.92,0.33 1.61,-4.62 0.66,0.09 0.17,1.09 1.22,-0.58 0.17,0.35 -0.44,1.25 3.3,1.85 0.85,1.17 1.64,0.22 0.2,0.3 0.61,0.09 2.03,4.14 -1.83,2.02 -1.97,-1.75 -2.25,0.11 0.19,0.37 -0.16,0.4 0.87,-0.05 2.18,2.68 -0.03,0.52 0.97,0.5 3.73,-2.91 1,0.88 3.94,-2.25 0.16,2.08 2.37,2.07 0.64,0.14 0.44,1.73 1.78,1.22 -0.57,0.73 0.46,0.36 -0.16,1.11 -1.72,1.85 0.67,2.02 1.16,2.06 -0.25,0.41 0.49,0.01 0.59,1.02 3.37,-1.16 4.08,7.78 0.71,7.23 -16.82,18.02 1.81,3.99 0.09,0.78 -0.37,1.18 -0.36,-0.08 -0.57,0.98 0.05,0.35 -0.45,0.1 -0.19,1.62 -0.28,0.15 0.99,2.82 -0.4,0.23 -0.07,0.5 -0.5,-0.34 -0.16,0.3 -0.39,-0.04 0.55,0.54 0.12,0.57 -0.16,0.31 -0.34,-0.14 0.04,0.42 -0.34,0.22 -0.22,1.38 -0.59,0.47 0.58,0.24 -0.02,0.34 -0.86,1.02 0.07,0.21 0.67,0.12 0,0.88 0.6,-0.2 0.15,0.75 0.38,0.42 0.07,0.87 -0.32,1.16 -0.38,-0.03 -0.03,0.76 -0.61,-0.01 0.98,1.08 -0.57,0.43 0.52,1.26 -0.3,0.61 0.21,0.62 -0.24,0.68 0.02,1.98 -0.54,1.89 0,2.47 -1.6,0.01 0,1.22 -72.58,-40.92 -2.4,-10.2 -0.88,-0.15 -0.12,-0.66 -1.03,-0.69 0.06,-0.59 -1.26,-0.84 0.14,-0.61 -0.35,-1.68 -0.42,-0.55 -0.41,-1.37 0.17,-0.75 -1.27,-1.55 -0.25,-1.59 3.26,-2.96 1.63,0.42 19.27,-4.79 3.96,0.92 9,7.29 0.51,0.03 0.09,-0.29 0.54,-0.08 0.18,-0.43 0.55,0.11 -0.03,-0.2 1.69,-0.96 0.43,0.01 0.28,-0.59 0.98,-0.34 -0.16,-0.23 0.2,-0.28 0.35,0.15 0.36,-0.4 0.26,0.4 0.26,-0.73 0.64,0.58 0.69,-0.88 1.15,-0.15 0.29,-0.51 1,-0.12 0.29,-0.78 -0.13,-0.8 0.27,-0.11 -0.21,-0.69 0.35,-0.09 0.02,-0.47 0.52,0 -0.07,-0.4 0.43,-0.29 0.41,-0.11 0.12,0.19 0.01,-0.39 0.34,-0.24 -0.03,-0.54 0.41,-0.03 0.46,-0.47 0.14,-0.87 0.46,-0.54 1.24,-0.41 1.3,-1.1 -5.96,-4.78 -1.69,-4.36 10.9,-3.25 0.8,4.77 1.49,0.72 1,1.07 0.46,-0.97 0.62,-0.29 0.28,-0.99 0.7,-0.64 0.54,-2.67 z"
              title="Narok"
              id="KE-33"
              className={selectedCounty === "narok" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Nyamira (NMR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Flag_of_Nyamira_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 912 km<sup>2</sup>
                </p>
                <p>Population: 605 576</p>
                <p>Capital: Nyamira</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 65.39705,339.73063 0,0 0.27,0.45 -0.47,0.84 0.26,0.68 -0.21,0.14 0.18,0.35 -0.27,1.61 0.83,1.82 -0.29,0.93 0.36,0.67 -0.46,0.83 -0.01,0.64 0.97,2.05 -0.86,0.31 -0.51,0.5 2.49,5.38 -2.68,2.98 -0.73,-0.46 -0.59,0.13 0.25,1.52 -0.43,-0.14 -0.36,0.55 0.07,0.51 -3.95,-6.65 -1.22,-0.7 -0.91,-0.04 -0.61,-0.83 -0.49,0.07 -1.95,-1.24 -0.97,-0.96 -0.67,-0.19 -0.23,-0.77 -0.74,-0.34 -0.75,0.17 -0.48,-0.86 0.73,-0.47 0.77,0.24 -0.15,-1.02 0.35,-1.15 0.91,-0.92 0.18,-0.67 0.63,-0.48 0.3,0.03 1.11,1.37 0.21,-0.48 0.34,0.49 0.37,-0.28 0.19,-0.83 -0.67,-0.59 0.17,-0.28 -0.51,-0.63 0.66,-1.93 -0.06,-0.96 -1.19,-1.29 1.05,-0.71 1.3,-0.29 2.04,-1.05 1.71,-1.36 1.84,-0.79 1.07,-0.88 0.71,0.4 0.73,1.56 -0.26,1.86 -0.39,0.31 -0.04,0.71 1.06,0.14 z"
              title="Nyamira"
              id="KE-34"
              className={selectedCounty === "nyamira" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Bomet (BMT)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Flag_of_Bomet_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 1 997 km<sup>2</sup>
                </p>
                <p>Population: 875 689</p>
                <p>Capital: Bomet</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 81.19705,334.44063 0,0 2.74,-0.14 0.27,-0.23 0.59,0.19 0.54,-0.23 0.51,0.31 2.41,-2.28 7.75,12.73 -10.9,3.25 1.69,4.36 5.96,4.78 -1.3,1.1 -1.24,0.41 -0.46,0.54 -0.14,0.87 -0.46,0.47 -0.41,0.03 0.03,0.54 -0.34,0.24 -0.01,0.39 -0.12,-0.19 -0.41,0.11 -0.43,0.29 0.07,0.4 -0.52,0 -0.02,0.47 -0.35,0.09 0.21,0.69 -0.27,0.11 0.13,0.8 -0.29,0.78 -1,0.12 -0.29,0.51 -1.15,0.15 -0.69,0.88 -0.07,-0.28 -0.34,0.07 -0.3,-0.35 -0.19,0.71 -0.26,-0.4 -0.36,0.4 -0.35,-0.15 -0.2,0.28 0.16,0.23 -0.98,0.34 -0.3,0.6 -0.41,-0.02 -1.69,0.96 0.03,0.2 -0.55,-0.11 -0.18,0.43 -0.54,0.08 -0.09,0.29 -0.48,-0.02 -9.03,-7.3 -3.96,-0.92 -0.07,-0.51 0.36,-0.55 0.43,0.14 -0.25,-1.52 0.59,-0.13 0.73,0.46 2.68,-2.98 -2.49,-5.38 0.51,-0.5 0.86,-0.31 -0.96,-2.01 0,-0.68 0.46,-0.72 -0.36,-0.78 0.31,-0.8 -0.85,-1.95 0.27,-1.61 -0.18,-0.35 0.21,-0.14 -0.26,-0.68 0.47,-0.82 -0.21,-0.66 0.34,-0.28 0.85,-0.08 0.6,-0.99 0.74,0.04 0.15,-0.37 0.29,0.09 0.84,-0.52 0.76,0.11 0.15,0.25 0.38,-0.52 0.47,0.55 0.45,-0.12 0.52,0.42 0.35,-0.12 0.26,0.69 0.19,-0.08 0.2,0.31 1.94,-0.34 0.11,-0.5 -0.66,-0.27 0.54,-0.6 0.8,-1.9 1.55,0.12 0.93,-0.37 1.57,0.42 1.03,-0.48 0.39,-0.56 z"
              title="Bomet"
              id="KE-02"
              className={selectedCounty === "bomet" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Homa Bay (HBY)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Homa_Bay_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 3 154 km<sup>2</sup>
                </p>
                <p>Population: 1 131 950</p>
                <p>Capital: Homa Bay</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 32.93705,328.28063 0,0 2.8,-1.58 9.94,-0.78 2.76,1.8 0.31,1.38 0.5,-0.22 0.72,0.75 0.24,-0.05 0.26,0.49 -0.42,0.1 0.15,0.51 0.41,0 -0.14,0.37 0.46,0.36 0.71,-0.16 0.69,1.12 0.06,0.96 1.94,0.25 0.25,0.3 0.25,-0.18 1.08,0.15 0.14,0.27 0.36,-0.44 1.2,-0.5 -0.06,1.03 0.85,-0.02 0.04,0.52 1.15,0.23 1.42,-0.36 0.69,0.21 0.17,-0.31 0.78,-0.18 0.43,-0.78 0.61,0.85 -0.1,0.38 -1.07,0.88 -1.84,0.79 -1.71,1.36 -2.04,1.05 -1.3,0.29 -1.79,1.26 -2.68,0.91 -2,0.98 -0.9,0.78 -2.69,0.96 -1.06,1.47 -1.35,0.23 -1.01,1.68 -0.4,1.8 -1.89,-0.76 -0.97,0.09 0.04,0.5 -1.59,0.24 -1.19,2.28 -0.35,2.38 -0.49,0.75 -1.03,0.06 -0.27,0.17 0.25,0.29 -1.22,0.83 0.08,0.47 -0.34,0.1 0.55,0.24 0.37,0.67 -1.17,1.15 -0.72,1.78 -1.78,-1.39 -2.39,-1.3 -0.26,0.16 0.38,0.76 -0.63,0.88 -2.58,0.5 -0.08,0.37 -0.92,0.22 -1.2,-1.6 -1.95,-1.32 -0.78,-0.2 -1.05,-1.65 -1.13,-0.81 -0.59,-0.98 -0.62,0.84 -0.72,-0.29 -0.38,0.65 -0.44,0.05 -0.48,-0.36 -0.96,0.71 -0.19,-0.34 -0.73,0.6 -0.58,-0.28 -0.91,0.24 -0.91,1.15 -8.73,0 -0.47,-13.75 0.46,-6.12 1.12,-6.72 16.7,0.01 2.42,4.33 0.67,0.59 0.78,0.11 0.94,-0.44 5.63,-4.81 3.49,-1.96 z"
              title="Homa Bay"
              id="KE-08"
              className={selectedCounty === "homa-bay" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Embu (EMB)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_Embu_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 555 km<sup>2</sup>
                </p>
                <p>Population: 608 599</p>
                <p>Capital: Embu</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 229.90705,335.51063 0,0 0.43,0.09 -0.2,0.7 -1.09,1.44 -1.83,4 0.31,1.1 -0.26,1.58 1.03,0.81 1.21,1.57 -1.65,1.23 0.1,2.03 0.52,0.27 -0.27,1.3 0.71,-0.03 0.22,1.19 -0.71,1.67 -0.7,0.54 0.11,0.63 -0.5,0.2 -0.23,0.71 0.19,0.49 -0.64,0.4 -1.89,-0.03 -0.23,0.21 -0.34,-0.44 -0.5,-0.07 -0.71,0.59 -0.14,-0.79 -0.56,0.91 -0.48,0.29 -1.67,0.06 -0.94,-2.62 -0.5,-0.16 -0.47,0.33 -0.97,0.04 -0.5,0.18 -0.49,0.7 -0.46,-0.05 -0.04,1.52 -0.55,0.37 -0.37,0.96 -0.41,0.09 -0.66,-0.31 -0.33,0.19 -0.28,-0.38 -0.34,0 -0.18,0.76 -1.17,0.15 -0.21,0.42 -0.79,0.1 0.19,0.37 -0.23,0.44 -1.27,0.13 -0.29,-0.31 -0.49,0.52 -0.34,-0.07 -0.74,0.74 0.04,0.94 -0.75,0.25 -0.28,-0.83 -0.69,-0.16 -0.57,0.43 -1.31,-1.07 0.13,-0.59 -1.54,-0.32 -0.35,-0.45 -0.83,0.21 -0.74,-0.28 -0.06,-0.62 -0.81,0.33 -0.76,-0.24 -0.28,0.32 -0.2,-0.41 -0.82,-0.35 -1.89,0.02 -1.33,-1.81 -0.06,-0.73 -1.07,-0.98 -1.06,0.14 -0.06,-0.42 0.52,-1.28 2.4,-0.36 0.56,0.82 1.82,0.29 0.57,-0.3 0.07,-0.29 0.35,0.11 1.43,-0.66 1.03,-0.04 1.12,-0.83 1.32,0.15 0.06,-0.33 0.59,-0.25 1.29,0.33 -0.5,-0.78 -0.5,-0.21 0.04,-1.18 -0.3,-0.45 0.21,-0.99 -0.31,-1.05 0.87,-2 -0.65,-0.87 0.41,-1.02 -0.34,-0.31 -0.26,-0.97 -1.32,-0.65 -0.33,-1.14 -1.01,-1.04 0.11,-0.87 -0.33,-0.73 0.22,-1.85 -0.3,-0.36 0.22,-0.57 -0.07,-1.45 -6.61,-14.71 14.06,11.93 1.77,0.51 0.97,0.82 1.64,0.31 1.81,1.87 1.15,0.27 0.68,0.67 1.08,0.28 0.42,0.42 0.69,0.01 0.46,-0.29 1.07,0.21 1.46,-0.13 0.99,-0.59 1.55,-1.37 -0.12,-0.19 0.29,-0.26 0.78,-0.06 0.37,-0.81 0.8,-0.41 -0.06,-0.7 0.32,-0.25 0.16,-0.93 0.75,-0.39 0.47,0.58 -0.28,0.75 0.39,0.26 -0.41,1.21 0.66,0.31 -0.04,0.43 0.45,0.53 0.73,0.06 0,0.52 0.45,0.13 z"
              title="Embu"
              id="KE-06"
              className={selectedCounty === "embu" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kirinyaga (KRG)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Kirinyaga_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 1 205 km<sup>2</sup>
                </p>
                <p>Population: 610 411</p>
                <p>Capital: Kerugoya</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 201.17705,340.39063 0,0 0.99,1 0.33,1.14 1.32,0.65 0.26,0.97 0.34,0.31 -0.41,1.02 0.65,0.87 -0.87,2 0.31,1.05 -0.21,0.99 0.3,0.45 -0.04,1.18 0.5,0.21 0.5,0.78 -1.29,-0.33 -0.59,0.25 -0.06,0.33 -1.32,-0.15 -1.12,0.83 -1.03,0.04 -1.43,0.66 -0.35,-0.11 -0.07,0.29 -0.57,0.3 -1.82,-0.29 -0.56,-0.82 -2.4,0.36 -0.52,1.67 -0.62,-1.72 0.28,-0.21 0.54,0.15 -0.46,-0.39 0.19,-0.16 -0.51,-0.97 -0.38,-0.17 0.28,-0.22 -0.3,-0.74 -0.28,0.02 -0.11,-0.29 0.09,-0.63 -0.44,-0.85 0.06,-0.53 -0.64,0.31 -0.75,0.9 -0.77,-1.44 -1.15,0.21 -0.14,-0.76 -0.42,-0.26 -0.02,-0.81 0.43,-0.12 -0.26,-0.35 0.1,-0.6 0.25,-0.09 -0.03,-0.75 -0.56,-0.59 -0.5,0.02 -0.89,-1.42 0.34,-0.69 -0.18,-1.18 1.24,-1.55 -0.37,-0.87 0.87,-0.51 -0.11,-2.31 1.07,0.03 0.35,-0.23 -0.02,-0.51 0.35,-0.29 -0.01,-0.5 5.86,-15.16 6.61,14.71 0.07,1.45 -0.22,0.57 0.3,0.36 -0.22,1.85 0.33,0.73 -0.09,0.91 z"
              title="Kirinyaga"
              id="KE-15"
              className={selectedCounty === "kirinyaga" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kitui (KTU)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Kitui_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 24 385 km<sup>2</sup>
                </p>
                <p>Population: 1 136 187</p>
                <p>Capital: Kitui</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 258.78705,315.45063 0,0 22.62,39.18 7.06,15.53 2.65,36.89 -0.91,0.98 -1.45,0.5 3.24,12.08 -12.57,24.35 -0.43,0.07 -0.33,0.72 -0.66,-0.07 -0.85,0.53 -1.05,0.24 -0.28,0.69 -0.89,0.6 -0.16,0.41 -1.66,1.02 -2.21,0.26 -1.12,-0.42 25.64,36.1 -0.85,-0.04 -0.91,-0.56 -0.06,-0.56 -0.51,0.19 -0.56,-0.22 -1.89,0.33 -0.62,0.75 -0.44,0.07 -2.07,-0.34 -0.3,0.33 -0.96,0.25 -1.21,-0.35 -1.72,1.08 -0.92,0.2 -0.32,-0.44 -1.29,0.76 -0.83,0.11 -0.39,-0.43 0.57,-0.1 0.09,-0.35 -1.67,-0.25 -0.32,-0.27 -2.22,-0.05 -1.62,-0.64 -0.6,0.28 -1.8,0.15 -0.22,-0.61 -1.07,-0.95 -1.92,-0.33 0.01,-0.65 -0.87,0.2 -0.6,-0.66 -1.19,-0.04 -1.37,-0.72 -1.14,0.06 -1.51,-1.12 -0.28,-1.08 -0.69,0 -0.86,-2.3 -0.58,-0.21 0.22,-0.64 -0.62,-0.09 0.11,-0.6 -0.43,-0.32 0.07,-0.45 -0.68,-0.36 0.22,-0.57 -0.27,-1.18 -0.48,-0.42 0.22,-0.86 0.54,-0.57 -2.28,-5.05 -0.55,-2.06 -0.88,-0.8 0.04,-0.41 -0.31,-0.25 -0.86,-2.78 -0.5,-0.22 -0.41,-1.19 0.39,-0.46 -0.89,-0.42 -0.07,-1.11 -0.56,-1.01 0.04,-0.5 -0.58,-0.22 -0.35,-0.7 -0.47,-0.25 -0.78,-3.37 -1.23,-0.19 -0.4,-0.64 -0.5,0 -0.25,-0.46 -0.55,-0.11 -0.65,-2.55 -0.76,-0.09 -0.74,-0.85 -0.65,0.02 -1.55,-0.99 -1.3,-0.18 -0.42,-0.33 -0.11,-0.61 -0.37,-0.15 0.17,-0.8 -0.63,-0.33 -0.17,-0.48 -0.61,-0.02 -0.26,-0.63 -0.44,0.02 -0.37,-2.03 -0.31,-0.2 0.36,-0.45 -0.6,-0.43 -0.29,-1.14 -0.36,-0.36 0.08,-0.64 -1.22,-0.39 -0.39,-0.85 -3.24,1.11 -0.11,-1.37 -0.5,-0.6 0.36,-3.43 -0.37,-0.83 0.07,-0.53 -0.27,-0.7 -0.69,-0.18 0.28,-0.59 -0.27,-0.2 0.12,-0.46 -0.28,-0.24 0.08,-0.3 -0.47,-0.28 0.1,-0.28 -0.92,-2.09 0.06,-0.7 -0.34,-0.5 0.55,-1.66 -0.7,-0.04 0.05,-0.61 -0.46,-1.35 0.13,-0.34 -0.75,-0.22 -0.2,-0.41 0.4,-0.82 -0.68,-0.4 -1.84,-1.94 -0.5,-1.02 0.15,-0.65 0.62,0 0.22,-0.77 -0.61,-2.35 -0.57,-0.21 0.14,-1.08 -0.36,-0.51 -0.55,0 -0.05,-0.94 -1.12,-0.95 0.17,-0.36 -1.81,-3.37 -0.65,-0.37 -0.64,-1.29 -0.42,-0.09 -0.53,-0.61 -1.11,-1.85 -0.64,-0.07 -0.42,-0.58 0.87,-0.57 1.43,0.43 2.2,-0.58 0.39,-0.88 1.07,-0.95 1.16,-0.38 -0.37,-0.49 -0.52,-2.53 -0.34,0.07 -0.55,-1.14 -1.31,-1.22 -1.18,0.1 -0.4,-0.83 -0.33,-0.1 -1.09,-2.8 -0.91,-1.26 -0.25,-1.05 -0.33,-0.27 0.1,-0.33 -0.72,-0.44 -1.5,-1.96 -0.91,-2.08 -0.91,-1.08 -1.18,0.24 -0.17,-3.5 8.24,-0.48 3.34,2.84 0.59,-1.96 0.6,-0.72 0.11,-0.57 0.6,-0.12 0.86,-1.22 0.27,-2.41 -0.17,-0.63 1.09,-0.7 -0.2,-0.23 0.34,-0.24 -0.31,-0.03 0.04,-0.27 -0.34,-0.21 -0.7,-0.03 0.33,-0.32 0.18,0.17 -0.45,-1.18 0.36,-0.21 -0.56,-0.59 0,-0.45 -0.24,0.02 0.04,-0.59 -0.27,0.15 -0.27,-0.61 -0.63,-0.18 0.37,-0.45 -0.26,-0.48 0.35,-0.91 0.3,-0.14 0.01,-0.64 0.72,-0.65 -0.19,-0.34 0.44,-0.2 -0.21,-1.2 1.47,-0.02 0.69,-0.4 -0.19,-0.54 0.23,-0.68 0.5,-0.2 -0.11,-0.63 0.7,-0.54 0.71,-1.67 -0.22,-1.19 -0.71,0.03 0.27,-1.3 -0.52,-0.27 -0.1,-2.03 1.65,-1.23 -1.21,-1.57 -1.04,-0.83 0.27,-1.56 -0.3,-1.13 1.82,-3.97 0.99,-1.21 0.2,-0.85 0.98,-0.19 0.74,-0.82 0.29,-1.71 0.26,-0.26 -0.39,-0.75 0.6,-0.55 -0.35,-0.59 0.44,-0.99 0.36,-0.18 -0.35,-0.72 0.74,-1.37 0.25,-1.13 1.54,0.06 1.18,0.42 2.46,-0.08 0.77,0.27 0.71,-0.19 1.24,-1.08 0.46,-0.97 1.09,-0.25 0.01,-0.66 1.1,-1.95 0.22,-2.11 0.46,-0.15 0.2,-0.38 0.52,0 0.06,-0.94 0.28,-0.16 0.51,-1.22 1.66,-1.05 1.21,0.51 0.48,-0.61 0.44,0.11 1.23,-1.88 1.17,0.8 0.97,-0.25 1.98,1.39 0.71,-0.76 0.57,0.16 0.94,-0.33 0.81,0.33 z"
              title="Kitui"
              id="KE-18"
              className={selectedCounty === "kitui" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Tana River (TRV)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Tana_River_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 35 375 km<sup>2</sup>
                </p>
                <p>Population: 315 943</p>
                <p>Capital: Hola</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 277.90705,315.10063 0,0 1.02,0.57 2.76,0.85 3.7,0.11 1.18,-0.55 0.63,0.7 0.41,0.06 0.94,-0.76 0.7,-0.21 0.28,-1.33 0.86,0.03 0.61,-0.6 0.23,0.36 0.33,0.01 0.73,-0.72 0.9,0.62 1.68,-0.42 0.5,1.06 1.36,1.32 0.22,0.58 1.05,0.69 0.03,0.6 0.74,-0.07 0.07,0.61 1.64,-0.2 0.41,0.58 0.73,-0.09 1.1,0.43 0.65,-0.6 0.71,-0.13 0.07,0.48 1.08,0.19 0.47,-0.17 0.15,0.45 1.02,-0.54 0.4,0.24 0.76,-0.3 0.54,0.2 0.48,-0.38 0.83,0.72 -0.18,0.7 0.53,-0.05 0.3,0.58 0.77,-0.42 0.1,0.5 0.46,-0.33 1.24,1.59 0.73,-0.12 0.19,0.4 0.35,-0.28 1.19,-0.04 1.01,1.15 0.48,0.04 0.8,0.6 0.14,0.68 0.42,0.48 0.65,0.16 0.1,0.3 0.44,-0.06 0.69,1.65 0.42,0.27 -0.27,0.93 0.46,-0.11 0.3,-0.55 0.54,0.44 0.42,-0.24 1.09,2.2 0.93,0.46 0.15,0.43 0.39,-0.16 0.26,0.6 -0.13,0.28 0.41,0.11 -0.16,0.3 0.23,0.29 -0.3,0.41 0.28,0.2 0.02,0.83 0.33,0.22 -0.1,0.65 0.69,0.02 -0.19,1.71 0.21,0.16 0.27,-0.24 0.01,0.43 0.91,0.65 -0.37,0.78 0.1,1.09 0.54,0.31 0.01,0.67 0.41,0.54 1.21,0.86 -0.03,0.28 -0.38,0.08 0.1,0.63 0.52,-0.09 0.21,0.57 0.6,-0.32 -0.05,1.3 0.41,0.23 0.03,0.42 0.39,-0.21 -0.18,0.54 1.94,0.11 0.45,-0.34 0.06,0.48 0.55,0.52 0.38,-0.23 0.52,0.56 0.63,0.1 -0.44,0.96 0.76,1.3 -0.13,0.55 0.54,-0.07 0.09,0.65 0.53,-0.05 -0.24,0.59 0.14,0.57 0.26,0.39 0.29,-0.2 -0.15,0.57 0.42,0.07 -0.06,1.28 -0.34,-0.07 0.15,0.51 0.91,0.38 -0.47,0.23 0.09,0.51 -0.49,0.2 0.42,0.46 -0.42,0.24 0.21,0.31 0.85,0.24 -0.12,0.67 0.51,0.02 -0.5,0.62 0.96,0.03 -0.36,0.38 0.55,0.5 0.11,1.11 -0.6,-0.05 0.35,0.45 -0.09,0.37 0.28,0 0.16,-0.56 0.56,0.37 -0.44,1.25 0.47,0.63 -0.55,0.33 0.34,0.26 -0.23,0.29 0.73,1.05 -0.22,0.58 0.68,0.1 0.34,0.51 -0.55,0.57 0.03,0.66 0.71,-0.41 -0.09,1.05 0.31,-0.08 0.45,0.32 -0.5,0.21 0.39,0.71 -0.33,0.62 0.21,0.3 0.51,0.06 0.03,1.22 0.78,0.82 -0.24,0.5 0.5,0.41 -0.21,0.36 0.29,0.65 0.42,0.09 0.37,2.94 0.23,0.22 0.42,-0.1 0.07,0.43 0.62,0.33 0.4,1.32 1.04,1.46 -0.07,0.53 0.54,0.01 0.1,0.59 0.54,0.13 -0.27,0.67 0.24,0.39 -0.26,0.27 0.72,0.1 -0.38,0.83 0.42,0.15 0.18,0.42 -0.41,0.3 0.1,0.5 -0.41,0.42 0.29,0.44 -0.4,0.36 0.4,1.41 0.43,0.27 -0.62,1.07 0.07,0.76 0.41,-0.06 0.31,0.82 -0.33,0.28 0.74,1.23 0.15,1.21 0.38,0.12 0.17,0.48 -0.26,1.13 0.32,0.18 -0.19,0.41 0.36,1 -0.39,0.12 0.07,0.29 0.35,0.19 1.84,-1.13 0.93,0.19 1.03,1.92 0.55,2.58 1.62,1.91 0.62,1.23 0.34,2.1 -0.1,3.02 0.72,1.51 -0.75,2.28 0.3,3.42 1.4,2.26 0.11,4.19 -0.19,1.35 0.62,1.18 0,1.16 0.44,0.83 2.56,13.36 0,8.54 10.94,-0.03 12.74,4.03 3.83,-0.68 -3.15,2.21 -2.04,2.38 -1.88,1.21 -0.41,-0.04 -1.72,-0.5 -1.25,-0.81 -0.89,-0.1 -0.75,-0.69 -0.47,-0.03 -0.15,-0.17 0.42,-0.65 -0.36,-0.48 -0.57,-0.14 0.03,0.59 -0.39,-0.17 0.04,-0.45 -0.23,-0.16 0.04,0.26 -0.68,0.04 -0.21,0.36 -0.51,-0.23 0.45,0.62 -0.25,0.08 -0.37,-0.46 -0.44,1.08 -0.63,0.14 0.01,0.45 0.89,0.16 1.92,-0.94 1.31,0.52 -3.15,0.54 -3.49,1.36 -4.08,2.11 -3.57,2.58 0.39,-0.79 0.5,0 0.55,-0.73 2.15,-1.17 0.63,-0.64 -2.85,1.65 -1.2,0.98 -0.57,0.75 0.14,0.34 -1.64,1.63 -2.12,3.14 -0.2,-0.11 0.15,-0.45 -0.42,0.04 0.5,-0.17 -0.13,-0.25 0.24,-0.18 -0.33,-0.13 0.6,-0.59 -0.2,-0.18 0.28,-0.33 -0.16,-0.72 -1.14,0.12 -0.4,1.25 0.49,-0.24 0.41,0.34 -0.67,0.78 -16.54,-23.36 -38.44,43.66 -0.07,-0.43 -0.68,0.05 -0.52,-0.31 -0.76,0.13 -0.42,-0.37 -0.33,0.48 -0.32,0.03 -0.69,-1.19 -0.49,0.24 -0.14,-0.42 -0.45,-0.02 -0.28,-1.27 -0.94,0.3 -0.48,0.66 -0.87,0.41 -0.05,0.5 -0.42,-0.11 -0.01,-0.41 -25.85,-36.19 1.12,0.42 2.21,-0.26 1.66,-1.02 0.16,-0.41 0.89,-0.6 0.28,-0.69 1.05,-0.24 0.85,-0.53 0.66,0.07 0.33,-0.72 0.43,-0.07 12.57,-24.35 -3.24,-12.08 1.45,-0.5 0.91,-0.98 -2.65,-36.89 -7.06,-15.53 -22.62,-39.18 0.23,-0.26 1.17,0.83 1.35,-0.58 0.44,-0.91 1.76,0.21 0.63,-0.49 -0.05,-0.68 0.6,0.01 0.08,-0.65 0.69,-0.88 0.83,0.1 1.91,0.91 0.57,-0.25 1.54,1.34 0.56,-0.01 0.48,-0.39 1.45,0.49 0.42,-0.8 1.37,1.16 2.15,0.67 0.94,-0.17 z"
              title="Tana River"
              id="KE-40"
              className={selectedCounty === "tana-river" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Nyeri (NYR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Nyeri_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 361 km<sup>2</sup>
                </p>
                <p>Population: 759 164</p>
                <p>Capital: Nyeri</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 194.39705,319.81063 0,0 -5.86,15.16 0.01,0.5 -0.35,0.29 0.02,0.51 -0.35,0.23 -1.07,-0.03 0.11,2.31 -0.87,0.51 0.37,0.87 -1.24,1.55 0.18,1.18 -0.32,0.85 0.87,1.26 0.5,-0.02 0.53,0.52 0.06,0.82 -0.25,0.09 -0.1,0.6 0.26,0.36 -1.27,0.13 -0.16,0.32 -0.65,-0.17 -1.01,0.31 -0.76,-0.14 -0.5,-0.24 -0.1,-0.53 -2.28,-1 -0.6,-0.87 -1.25,-0.19 -0.63,-0.39 -1.1,-0.03 -0.56,-0.47 -3.73,1.62 0,0.28 -3.5,-0.06 -0.89,-0.83 -0.37,0.1 -1.55,-0.87 -0.38,-0.55 -1.5,-0.24 -1.8,0.3 -0.72,-0.29 -0.73,0.29 -0.94,1.06 0.12,1.97 -0.15,0.23 -0.42,-0.36 -1,-1.56 -0.02,-0.81 -0.57,-0.3 -0.44,-2.89 -0.39,-0.48 0.54,-1.95 -0.09,-0.99 -0.79,-0.22 0.1,-1.46 -1.59,-1.84 0.46,-0.81 -1.68,-0.95 0.71,-0.94 -0.41,-1.24 0.35,-1.33 3.97,-7.2 -0.19,-0.64 0.41,0 -1.62,-1.22 3.05,-0.93 0.29,-0.41 2.08,-0.5 0.62,-0.66 0.11,0.31 1.47,-0.46 2.19,-0.18 0,1.84 1.74,0.44 -0.17,0.66 0.72,1.3 -1.09,1.14 -0.71,0 0.98,3.24 0.8,-0.3 0.52,0.64 4.77,1.4 1.38,0.65 0.59,-1.42 -0.44,-0.89 0.75,-0.4 0.6,-0.97 -0.27,-0.6 0.56,-2.31 -0.7,-0.23 0.13,-1.52 -0.74,-0.26 -0.58,-0.61 -0.41,-3.61 2.74,-1.3 1.55,-2.24 0.67,-0.68 0.45,0.06 0.33,-0.51 -0.02,0.71 2.69,2.96 0.39,-1 10.14,6.53 z"
              title="Nyeri"
              id="KE-36"
              className={selectedCounty === "nyeri" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kisumu (KSM)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Kisumu_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 009 km<sup>2</sup>
                </p>
                <p>Population: 1 155 574</p>
                <p>Capital: Kisumu</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 35.82705,312.05063 0,0 0.78,0.37 0.41,-0.36 0.46,0.01 -0.09,1.12 0.21,0.27 0.62,-0.24 0.38,-0.27 0.55,-1.36 -0.18,-0.49 0.85,-0.64 0.57,0.75 1.36,0 1.44,0.79 1.59,-0.22 -0.21,0.91 0.42,-0.33 0.79,0.06 0.39,-0.66 0.72,-0.22 0.71,1.1 0.41,-0.06 0.43,0.5 0.48,-0.91 1.03,0.22 0.36,-0.81 0.92,-0.99 0.35,-0.05 0.52,-0.62 0.69,-0.12 -1.54,2.1 0.3,0.58 1.01,0.32 5.4,-0.1 -0.07,0.38 0.22,0.19 1.79,-0.33 -0.13,-0.23 0.68,0.31 0.8,-0.44 0.64,0.01 -0.03,-0.27 1,0.54 2.47,0.35 0.89,1.89 0.36,-0.66 1.11,-0.69 0.2,-0.76 0.37,-0.29 -0.06,-1.32 2.95,2.03 0.55,-0.45 1.84,-0.28 0.7,0.16 0.86,0.48 0.32,1.72 0,2.22 0.57,0.75 0.96,0.05 0.97,1.83 0.4,-0.44 0.42,0.7 -0.25,0.51 0.52,-0.05 0.36,0.62 1.98,0.02 0.01,0.91 0.67,2.53 -1.63,0.71 -0.88,-0.61 -1.59,-0.02 -0.51,-0.25 -0.02,-0.55 -0.78,-0.62 -0.16,-0.65 -0.47,-0.04 -0.27,-0.4 -0.75,0.02 -0.2,-1.1 -0.65,-0.52 -1,-0.34 -0.17,0.35 -1.15,-0.19 -0.47,0.2 -0.99,-0.16 -0.54,-0.43 -1.39,2.61 -1.8,0.4 -0.51,0.4 -0.32,1.08 -0.31,3.42 -2.53,2.53 0.23,3.02 -0.52,0.75 -0.78,0.18 -0.15,0.31 -0.71,-0.21 -0.89,0.37 -1.67,-0.24 -0.01,-0.49 -0.24,-0.1 -0.64,0.1 0.05,-1.04 -1.2,0.5 -0.36,0.44 -0.14,-0.27 -1.08,-0.15 -0.25,0.18 -0.25,-0.3 -1.94,-0.25 -0.06,-0.96 -0.69,-1.12 -0.71,0.16 -0.46,-0.36 0.14,-0.37 -0.41,0 -0.15,-0.51 0.42,-0.1 -0.26,-0.49 -0.24,0.05 -0.72,-0.75 -0.5,0.22 -0.31,-1.38 -2.76,-1.8 -9.94,0.78 -2.8,1.58 -4.11,-12.63 2.79,-2.06 1.45,-0.71 2.48,-0.52 0.28,-0.31 z"
              title="Kisumu"
              id="KE-17"
              className={selectedCounty === "kisumu" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kericho (KRC)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Flag_of_Kericho_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 454 km<sup>2</sup>
                </p>
                <p>Population: 901 777</p>
                <p>Capital: Kericho</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 87.32705,309.71063 0,0 1.73,-0.1 0.31,0.42 -0.72,0.28 0.07,0.25 1.12,-0.27 1.99,0.39 0.14,-0.42 0.39,0.03 1.18,1.37 2.23,-0.05 1.58,1.42 1.26,0.2 0.35,0.81 -0.22,0.23 0.32,0.39 -0.93,1.14 -0.51,0.19 -0.03,0.41 0.49,0.66 -1.1,1.14 -0.29,-0.02 -0.1,0.39 0.16,1.01 0.58,0.68 0.81,-0.48 0.85,0 0.45,0.05 0.4,0.77 0.9,-0.1 -0.28,1.28 0.45,0.19 -0.55,0.3 -0.14,0.62 -0.32,0.09 0.1,1.69 -0.63,2.01 -0.82,0.25 -0.05,0.69 -0.61,0.35 -0.52,-0.29 -0.39,0.27 -0.17,-0.59 -0.54,-0.32 -0.64,1.74 -0.68,-0.26 0.19,-1.22 -2.48,-1.29 -0.2,0.6 -1.25,-0.06 -1.91,0.5 -3.25,1.41 2.21,3.6 -2.38,2.27 -0.54,-0.3 -3,0.45 -0.93,-0.18 -0.62,0.72 -1.09,0.47 -1.49,-0.43 -0.93,0.37 -1.55,-0.12 -0.8,1.9 -0.54,0.6 0.66,0.27 -0.11,0.5 -1.94,0.34 -0.2,-0.31 -0.19,0.08 -0.26,-0.69 -0.35,0.12 -0.52,-0.42 -0.45,0.12 -0.48,-0.55 -0.37,0.52 -0.15,-0.25 -0.76,-0.11 -0.84,0.52 -0.29,-0.09 -0.15,0.37 -0.74,-0.04 -0.6,0.99 -0.85,0.08 -0.4,0.47 -1.03,-0.1 0.66,-2.92 -0.73,-1.56 -0.7,-0.38 0.09,-0.44 -0.52,-0.78 -0.23,-3.02 2.53,-2.53 0.31,-3.42 0.32,-1.08 0.51,-0.4 1.8,-0.4 1.39,-2.61 0.54,0.43 0.99,0.16 0.47,-0.2 1.15,0.19 0.18,-0.35 1.64,0.86 0.2,1.1 0.75,-0.02 0.27,0.4 0.47,0.04 0.16,0.65 0.78,0.62 0.03,0.56 0.51,0.24 1.58,0.02 0.86,0.6 1.54,-0.5 -0.57,-3.64 -1.98,-0.02 -0.36,-0.62 -0.52,0.05 0.25,-0.51 -0.42,-0.7 -0.4,0.44 -0.97,-1.83 -0.96,-0.05 -0.57,-0.75 3.06,-0.41 1.59,-0.72 1.89,1.3 1.75,0.05 1.75,-1.32 1.25,-0.52 -1.16,-3.07 0.56,-1.7 1.37,-0.77 -0.15,-0.39 z"
              title="Kericho"
              id="KE-12"
              className={selectedCounty === "kericho" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Tharaka-Nithi (TNT)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Tharaka_Nithi_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 609 km<sup>2</sup>
                </p>
                <p>Population: 393 177</p>
                <p>Capital: Kathwana</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 244.56705,310.06063 0,0 0.41,0.25 0.83,-0.25 0.94,0.39 -0.16,0.32 0.45,0.12 0.13,0.7 0.88,0.66 0.27,-0.39 0.32,0 1.83,0.58 0.84,1.15 -0.15,0.32 0.48,0.2 -0.45,0.88 -0.62,0.49 -0.15,0.5 -0.45,-0.1 -0.45,0.6 -1.23,-0.51 -1.67,1.06 -0.51,1.22 -0.28,0.16 -0.06,0.94 -0.52,0 -0.2,0.38 -0.46,0.15 -0.22,2.11 -1.1,1.95 -0.01,0.66 -1.09,0.25 -0.46,0.97 -1.24,1.08 -0.71,0.19 -0.77,-0.27 -2.46,0.08 -1.18,-0.42 -1.49,-0.11 -0.3,1.18 -0.74,1.37 0.35,0.72 -0.36,0.18 -0.44,0.99 0.35,0.59 -0.6,0.55 0.39,0.75 -0.26,0.26 -0.29,1.71 -1.12,0.91 -1.13,0 -0.29,-0.3 0.09,-0.38 -0.78,-0.1 -0.45,-0.53 0.04,-0.43 -0.61,-0.23 0.36,-1.29 -0.39,-0.26 0.28,-0.75 -0.47,-0.58 -0.75,0.39 -0.16,0.93 -0.32,0.25 0.06,0.7 -0.8,0.41 -0.37,0.81 -0.78,0.06 -0.29,0.26 0.12,0.19 -1.55,1.37 -0.99,0.59 -1.46,0.13 -1.07,-0.21 -0.46,0.29 -0.69,-0.01 -0.42,-0.42 -1.08,-0.28 -0.68,-0.67 -1.15,-0.27 -1.81,-1.87 -1.64,-0.31 -0.97,-0.82 -1.77,-0.51 -14.06,-11.93 12.56,1.73 3.61,0.11 0.69,0.63 0.67,0.02 0.57,0.63 0.87,0.08 0.21,0.3 1.05,0.24 0.22,-0.71 0.99,0.19 2.83,-0.48 0.68,-0.65 0.32,0.01 1.06,-1.81 0.54,0.15 0.38,-0.24 0.69,0.42 3.47,-2.34 -0.32,-0.45 0.19,-0.25 -0.31,-0.22 0.73,-2.06 -0.8,-2.2 0.1,-0.67 0.23,-0.39 1.09,-0.09 0.63,0.47 0.43,0 0.47,-1.65 0.96,0.26 1.1,-0.07 0.35,-0.73 -0.12,-0.44 0.45,-0.06 0.5,-0.63 -0.58,-0.39 0.78,-1.18 1.94,-0.12 1.22,0.44 0.34,0.47 0.39,0.09 0.83,1.44 0.62,-0.15 0.87,0.22 0.51,-0.42 0.3,0.17 0.7,-1.12 0.55,0.08 0.53,-0.56 0.22,0.4 1.08,0.03 1.35,1.18 0.9,0.16 0.53,0.41 z"
              title="Tharaka-Nithi"
              id="KE-41"
              className={
                selectedCounty === "tharaka-nithi" ? "map active" : "map"
              }
            />
          </Popover>
          <Popover
            title="Nyandarua (NDR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/37/Flag_of_Nyandarua_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 3107 km<sup>2</sup>
                </p>
                <p>Population: 638289</p>
                <p>Capital: Ol Kalou</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 157.21705,319.92063 0,0 1.62,1.22 -0.41,0 0.19,0.64 -3.97,7.2 -0.35,1.33 0.41,1.24 -0.71,0.94 1.68,0.95 -0.46,0.81 1.59,1.84 -0.1,1.46 0.79,0.22 0.09,0.99 -0.54,1.95 0.39,0.48 0.44,2.89 0.57,0.3 0.06,0.9 1.38,1.83 -0.03,4.04 0.83,3.61 0.83,0.97 -0.86,0.04 0.24,0.43 -0.1,1.07 -1.97,-2.38 -0.8,-0.36 -0.75,0.53 -0.47,-0.18 -2.4,2.35 0.59,1.38 -1.87,-0.19 0.22,1.28 0.47,0.74 -0.63,1.43 -1.44,0.98 0.39,0.41 -0.9,0.51 -0.57,-0.68 0.43,-2.26 -0.12,-1.06 0.56,-0.7 -1.53,-5.26 -0.82,-1.97 1.3,-0.85 -1.25,-2.49 0.4,-0.23 -0.16,-0.69 -0.47,-0.33 0.19,-0.42 -0.37,-0.18 -0.04,-0.63 -0.52,0.81 -2.06,0.4 -0.86,-1.01 -0.2,-2.4 -2.19,0.46 -0.45,-0.37 0.24,-1.15 -0.41,-1.2 0.33,-0.42 -0.27,-0.45 0.09,-0.58 -0.37,-0.38 -0.01,-1.48 -0.49,-0.6 0.14,-1.21 -0.2,-0.84 -0.33,-0.24 -0.05,-1 -0.72,-0.52 -0.31,-0.96 -1.55,0.75 -1.23,-0.12 -0.16,-1.08 -0.99,0.37 -0.97,0.94 -0.68,-2.9 -0.78,0.17 -1.05,-0.2 -0.39,0.74 -0.79,-4.7 2.02,-0.94 -1.3,-2.57 -0.28,0.09 -0.36,-0.52 -0.66,-3.73 1.22,-1.78 0.36,0.14 0,0.43 1.05,0.13 0.32,-1.81 -0.21,-2.01 0.25,-0.23 0.27,-1.62 0.67,-0.03 0.23,-1.17 1.23,-0.74 0.04,0.41 0.29,-0.03 0.23,-0.62 2.46,-0.85 -0.52,-1.82 0.7,-0.44 0.32,0.11 0.52,1.15 1.22,0.96 0.04,-0.32 0.4,0.39 0.39,-0.14 -0.02,-0.41 0.83,0.03 0.6,-0.37 -1.33,-0.78 1.28,-1.47 1.03,-0.35 1.22,-2.79 2.75,3.15 0.62,2.09 3,-1.27 0.82,1.53 0.05,0.93 0.58,1.4 2.03,-0.73 0.85,1.89 -3.88,0.24 -0.46,0.73 -0.84,0.62 -0.82,1.35 0.73,0.71 -0.3,0.61 0.41,0.08 0.53,0.62 3.68,0.29 1.19,2.59 0.21,-0.06 z"
              title="Nyandarua"
              id="KE-35"
              className={selectedCounty === "nyandarua" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Vihiga (VHG)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Vihiga_County_Flag.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 531 km<sup>2</sup>
                </p>
                <p>Population: 590 013</p>
                <p>Capital: Mbale</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 58.18705,299.78063 0,0 -0.58,2.52 -1.76,0.67 -0.13,0.37 -1.31,0.93 0.01,2.11 -0.63,0.84 0.05,0.5 -0.58,0.8 -0.08,0.58 -1.55,-0.04 -2.74,2.31 -0.29,-0.73 -0.85,0.12 -0.2,0.54 0.46,1.28 -0.41,0.06 -0.71,-1.1 -0.72,0.22 -0.39,0.66 -0.79,-0.06 -0.43,0.32 0.22,-0.9 -1.59,0.22 -1.44,-0.79 -1.36,0 -0.57,-0.75 -0.85,0.64 0.18,0.49 -0.55,1.36 -0.38,0.27 -0.62,0.24 -0.21,-0.27 0.09,-1.12 -0.46,-0.01 -0.41,0.36 -0.78,-0.37 0.54,-0.63 -0.35,-0.56 0.79,-0.73 0.17,-1.45 0.34,-0.19 0.01,-1.42 -0.3,-0.97 0.43,-0.43 0.6,0.03 0.79,-0.49 -0.03,-0.64 2.94,-0.8 1.48,0.16 0.72,-0.18 0.36,0.47 0.75,-0.74 0.49,0.19 0.01,-0.48 0.71,-0.01 1.18,-0.53 0.03,0.41 0.53,0.34 2.19,-1.35 0.26,0.12 0.85,-0.38 0.6,0.13 -0.01,-0.89 -0.27,-0.37 0.3,-0.11 1.7,0.16 0.8,-0.91 0.41,0.22 0.41,-0.28 0.55,0.14 0.5,-0.53 0.61,0.64 1.27,-0.21 z"
              title="Vihiga"
              id="KE-45"
              className={selectedCounty === "vihiga" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Nakuru (NKR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Nakuru_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 7 509 km<sup>2</sup>
                </p>
                <p>Population: 2 162 202</p>
                <p>Capital: Nakuru</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 134.23705,312.43063 0,0 -0.27,1.62 -0.25,0.23 0.21,2.01 -0.32,1.81 -1.05,-0.13 0,-0.43 -0.36,-0.14 -1.22,1.78 0.66,3.73 0.36,0.52 0.28,-0.09 1.3,2.57 -2.02,0.94 0.79,4.7 0.39,-0.74 1.05,0.2 0.78,-0.17 0.68,2.9 0.97,-0.94 0.99,-0.37 0.16,1.08 1.23,0.12 1.55,-0.75 0.31,0.96 0.72,0.52 0.05,1 0.33,0.24 0.2,0.84 -0.14,1.21 0.49,0.6 0.01,1.48 0.37,0.38 -0.09,0.58 0.27,0.45 -0.33,0.42 0.41,1.2 -0.24,1.14 0.45,0.38 2.19,-0.46 0.2,2.4 0.86,1.01 2.06,-0.4 0.52,-0.81 0.04,0.63 0.37,0.19 -0.19,0.41 0.47,0.33 0.16,0.69 -0.4,0.23 1.25,2.49 -1.3,0.85 0.82,1.97 1.53,5.26 -0.56,0.7 0.12,1.06 -0.43,2.26 0.57,0.68 0.48,0.24 0.41,-0.16 0.55,0.45 -0.32,0.74 0.43,0.33 0.28,1.79 0.52,0.23 0.08,0.48 -0.63,3.01 0.23,1.08 -1.22,2.18 -0.18,-0.08 -1.27,1.54 -0.45,1.65 -2.54,-1.9 -8.89,-4.19 -4.08,-7.78 -3.37,1.16 -0.59,-1.02 -0.49,-0.01 0.25,-0.41 -1.16,-2.06 -0.67,-2.02 1.72,-1.85 0.16,-1.11 -0.46,-0.36 0.57,-0.73 -1.78,-1.22 -0.44,-1.73 -0.64,-0.14 -2.37,-2.07 -0.16,-2.08 -3.94,2.25 -1,-0.88 -3.73,2.91 -0.97,-0.5 0.03,-0.52 -2.18,-2.68 -0.87,0.05 0.16,-0.4 -0.19,-0.37 2.25,-0.11 1.97,1.75 1.83,-2.02 -2.17,-4.3 -2.31,-0.45 -0.85,-1.17 -3.3,-1.85 0.44,-1.25 -0.17,-0.35 -1.22,0.58 -0.17,-1.09 -0.66,-0.09 -1.61,4.62 -1.92,-0.33 -1.22,1.26 -0.43,0.05 0.04,1.36 -1.06,1.28 -0.6,2.98 -0.71,0.65 -0.27,0.98 -0.63,0.3 -0.39,0.94 -1.06,-1.05 -1.49,-0.72 -0.79,-4.75 -9.97,-16.35 3.25,-1.41 1.91,-0.5 1.25,0.06 0.2,-0.6 2.48,1.29 -0.19,1.22 0.68,0.26 0.64,-1.74 0.54,0.32 0.17,0.59 0.39,-0.27 0.52,0.29 0.61,-0.35 0.05,-0.69 0.82,-0.25 0.36,-0.78 0.27,-1.23 -0.1,-1.69 0.32,-0.09 0.14,-0.62 0.55,-0.3 -0.45,-0.19 0.28,-1.28 -0.9,0.1 -0.4,-0.77 -0.45,-0.05 -0.85,0 -0.81,0.48 -0.58,-0.68 -0.16,-1.04 0.1,-0.36 0.29,0.02 1.1,-1.14 -0.49,-0.66 0.03,-0.41 0.51,-0.19 0.93,-1.14 0.53,1.15 1.08,-0.42 1.17,0.12 -0.05,1.15 0.25,0.78 0.77,0.75 1.33,2.14 -0.39,0.73 0.15,2.25 0.53,0.46 1.67,0.26 0.96,-1.72 -0.46,-0.15 1.02,-1.72 -0.03,-2.89 0.94,-0.66 0.84,1.11 3.15,-4.77 1,0.89 0.35,-0.2 0.98,1.93 0.58,-0.25 -0.03,-0.31 1.25,-1.21 1.14,-2 0.5,-1.66 -0.13,-0.44 -2.63,-2.8 0.61,-1.47 1.18,0.45 0.25,0.54 -0.01,1.2 1.85,-0.16 0.53,1.64 1.95,0.58 0.62,0.95 2.42,1.04 1.06,-1.13 -0.39,-3.16 1.26,0.12 1.18,-7.23 2.84,-0.77 -0.12,-0.98 -0.66,-0.22 -0.32,-0.47 1.39,-0.36 1.94,1.47 2.3,3.48 0.44,1.18 0.19,0.92 -1,1.33 -0.82,1.83 0.57,1.71 -0.55,2.76 z"
              title="Nakuru"
              id="KE-31"
              className={selectedCounty === "nakuru" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Siaya (SYA)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/86/Flag_of_Siaya_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 496 km<sup>2</sup>
                </p>
                <p>Population: 993 183</p>
                <p>Capital: Siaya</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 26.48705,293.64063 0,0 1.5,1.21 -0.42,0.58 0.68,0.79 -0.19,1.57 -0.82,0.27 0.46,1.26 -0.38,1.53 0.9,-0.32 1.58,-1.53 0.93,-0.33 0.38,0.68 -0.87,0.26 -0.59,0.88 0.9,1.07 -0.4,0.65 -0.56,0.24 0.67,0.37 1.74,-0.66 0.85,0.34 -0.01,0.76 -0.58,0.41 -0.85,0.03 0.13,0.43 1.21,0.45 -0.36,0.14 -0.02,0.58 0.34,-0.17 0.78,0.2 0.11,-0.51 0.47,-0.27 -0.44,-0.35 0.27,-0.32 0.47,0.53 0.3,-0.7 0.63,0.36 0.97,-0.82 0.78,0.63 -0.12,0.54 -0.47,0.27 0.9,0.37 -0.32,0.43 0.29,0.31 -0.3,0.3 0.3,0.97 -0.01,1.42 -0.34,0.19 -0.17,1.45 -0.79,0.73 0.26,0.68 -0.73,0.82 -2.48,0.52 -1.45,0.71 -2.79,2.06 4.11,12.63 -3.49,1.96 -5.63,4.81 -0.94,0.44 -0.78,-0.11 -0.67,-0.59 -2.42,-4.33 -16.7,-0.01 1.97,-11.88 -1.81,-5.91 3.94,0.05 1.3,-1.53 1.36,-5.18 0.45,-0.82 -0.11,-0.85 0.87,-0.39 0.25,0.13 0.48,-0.67 0.3,0.01 -0.11,0.59 0.63,-1.13 -0.12,-1.77 -0.38,-0.61 0.61,-1.9 0.02,-1.3 1.27,-0.89 1.09,-1.79 0.06,-0.62 0.97,0.33 0.73,1.08 0.84,0.47 0.07,0.43 0.18,-1.61 1.7,-0.08 0.72,-1.36 0.78,-0.1 1.33,0.45 2.67,-0.23 1.32,0.32 0.3,0.46 0.5,-0.51 z"
              title="Siaya"
              id="KE-38"
              className={selectedCounty === "siaya" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Nandi (NDI)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/15/Contea_di_Nandi_flag.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 884 km<sup>2</sup>
                </p>
                <p>Population: 885 711</p>
                <p>Capital: Kapsabet</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 53.90705,279.97063 0,0 11.1,-0.9 3.1,1.28 0.38,-0.88 0.58,0.55 0.68,0.08 0.7,0.5 0.95,-0.2 0.51,-0.45 -0.3,2.4 -1.18,1.86 2.07,3 1.01,2.37 1.73,2.87 4.56,6.64 2.1,1 -0.23,2.9 2,0.91 0.86,1.45 0.59,-0.41 0.43,0.21 1.93,4.95 -1.37,0.77 -0.56,1.7 1.16,3.07 -1.25,0.52 -1.75,1.32 -1.75,-0.05 -1.89,-1.3 -1.59,0.72 -3.06,0.41 0,-2.22 -0.32,-1.72 -0.85,-0.48 -0.71,-0.16 -1.84,0.28 -0.55,0.45 -2.95,-2.03 0.06,1.32 -0.37,0.29 -0.2,0.76 -1.11,0.69 -0.36,0.66 -0.89,-1.89 -2.47,-0.35 -1,-0.54 0.03,0.27 -0.64,-0.01 -0.8,0.44 -0.68,-0.31 0.13,0.23 -1.79,0.33 -0.22,-0.19 0.07,-0.38 -5.4,0.1 -1.01,-0.32 -0.3,-0.58 1.54,-2.1 -0.69,0.12 -0.52,0.62 -0.35,0.05 -0.92,0.99 -0.36,0.81 -1.02,-0.22 -0.47,0.9 -0.25,-0.01 -0.65,-1.74 0.08,-0.48 0.96,-0.2 0.29,0.73 2.74,-2.31 1.55,0.04 0.08,-0.58 0.58,-0.8 -0.05,-0.5 0.63,-0.84 -0.01,-2.11 1.31,-0.93 0.13,-0.37 1.76,-0.67 0.31,-0.62 -0.26,-0.33 0.68,-2.03 0.78,0.01 0.78,-1.94 1.27,0.04 -1.9,-4.3 -0.5,-2.38 0.67,0.17 0.4,-0.72 0.11,-2.76 -1.87,-3.42 -0.96,-1.03 -0.01,-0.55 -3.2,-2.47 z"
              title="Nandi"
              id="KE-32"
              className={selectedCounty === "nandi" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Meru (MRU)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Meru_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 7 003 km<sup>2</sup>
                </p>
                <p>Population: 1 545 714</p>
                <p>Capital: Meru</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 248.53705,299.78063 0,0 0.71,0.98 1.79,1.26 0.55,2.66 1.24,0.96 -0.29,1.07 0.93,0.5 0.01,0.4 0.49,-0.03 -0.27,0.95 0.72,0.35 0.01,1.03 1.13,0.92 0.14,0.45 1.23,0.7 -0.05,0.44 0.38,0.3 -0.04,0.81 0.39,0.54 -0.12,0.65 0.53,0.41 -0.98,0.32 -0.61,-0.14 -0.65,0.75 -2.03,-1.41 -0.97,0.25 -0.61,-0.63 -1.01,-0.36 0.15,-0.32 -0.84,-1.15 -1.83,-0.58 -0.32,0 -0.28,0.38 -0.85,-0.64 -0.16,-0.73 -0.44,-0.09 0.16,-0.33 -1.02,-0.4 -0.78,0.26 -0.91,-0.66 -0.9,-0.16 -1.35,-1.18 -1.08,-0.03 -0.19,-0.39 -0.56,0.55 -0.55,-0.08 -0.7,1.12 -0.43,-0.15 -0.19,0.34 -0.73,0.09 -0.31,-0.24 -0.65,0.14 -0.82,-1.44 -0.39,-0.09 -0.34,-0.47 -1.22,-0.44 -1.72,0.04 -1,1.26 0.58,0.39 -0.5,0.63 -0.45,0.06 0.12,0.44 -0.35,0.73 -1.1,0.07 -0.96,-0.26 -0.47,1.65 -0.43,0 -0.63,-0.47 -1.09,0.09 -0.23,0.39 -0.1,0.67 0.8,2.2 -0.73,2.06 0.31,0.22 -0.19,0.25 0.32,0.45 -3.47,2.34 -0.69,-0.42 -0.38,0.24 -0.54,-0.15 -1.06,1.81 -0.32,-0.01 -0.68,0.65 -2.83,0.48 -0.99,-0.19 -0.22,0.71 -1.05,-0.24 -0.21,-0.3 -0.87,-0.08 -0.57,-0.63 -0.67,-0.02 -0.69,-0.63 -3.61,-0.11 -12.56,-1.73 -9.86,-6.28 -0.28,-0.25 0.06,-0.4 -1.21,-0.97 -0.41,-1.11 -0.86,-0.92 1.29,-0.95 1.66,-0.09 0.8,-0.6 2,-0.44 1.96,-1.02 0.6,-0.39 0.09,-1.08 0.74,-0.15 0.31,0.4 1.46,-1.72 0.1,-1.38 1.51,-1.56 1.77,-0.26 -0.26,-0.46 0.86,-0.23 -0.03,-0.63 1.08,-2.24 -0.41,-0.41 0.73,-0.52 0.12,-0.48 1.42,-0.74 0,-0.69 1.62,-0.09 2.08,0.84 4.16,1.09 0.61,-0.86 0.16,-1.55 -0.18,-0.49 0.31,-0.53 0.16,-0.22 1.45,0.02 1.28,-1.9 -0.26,-2.33 -0.75,-0.02 -0.24,-1.04 -0.01,-2.33 0.31,-0.45 -0.01,-0.72 13.69,-4.61 13.45,-6.04 6.59,19.29 1.11,0.43 0.03,5.37 1.86,0.69 1.48,0.99 z"
              title="Meru"
              id="KE-26"
              className={selectedCounty === "meru" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Busia (BSA)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Busia_County.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 1 628 km<sup>2</sup>
                </p>
                <p>Population: 893 681</p>
                <p>Capital: Busia</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 30.06705,269.11063 0,0 -0.1,0.53 -0.52,-0.29 -1.1,0.15 0.72,2.22 -0.37,0.5 0.45,1.24 -1.95,0.9 -0.24,1.77 -0.53,0.51 0.03,0.79 0.39,0.65 -0.49,0.97 1.3,1.4 1,1.87 -1.3,0.53 0.27,1.87 -1.62,0.28 -0.06,1.18 -1.02,0.67 1,1.08 1.02,0.07 2.55,1.76 -1.21,0.67 -0.27,1.07 -0.64,0.37 -0.17,1.1 -1.22,1.18 -0.3,-0.46 -1.26,-0.31 -2.73,0.22 -1.76,-0.43 -0.35,0.08 -0.72,1.36 -1.7,0.08 -0.18,1.61 -0.07,-0.43 -0.84,-0.47 -0.73,-1.08 -0.97,-0.33 -0.06,0.62 -1.09,1.79 -1.29,0.94 0,1.25 -0.61,1.9 0.38,0.61 0.12,1.77 -0.63,1.13 0.11,-0.59 -0.3,-0.01 -0.48,0.67 -0.25,-0.13 -0.87,0.39 0.11,0.85 -0.45,0.82 -1.36,5.18 -1.3,1.53 -3.94,-0.05 -2.21,-7.22 0.12,-0.64 5.23,-7.11 -0.02,-0.28 0.99,-0.82 0.2,-0.8 0.94,-0.44 -0.09,-0.73 0.52,-0.3 0.02,-0.58 0.57,-0.43 -0.07,-0.7 0.79,-0.08 1.58,-1.36 0.49,-1.62 -0.5,-1.97 -0.59,-0.75 -0.01,-1.75 1.78,-1.37 -0.21,-1.69 0.35,-0.41 -0.35,-0.36 0.51,-0.8 0.05,-1.18 0.61,-1.59 0.8,-0.11 1.44,-1.16 0.51,0.07 0.35,-0.87 0.48,-0.35 0.85,0.15 0.3,-0.4 0.89,0.17 0.28,-0.35 0.61,0.19 1.43,-0.62 0.1,-2.16 1.97,-0.93 -0.33,-1.37 0.46,-2.54 2.5,-0.74 0.6,0.36 0.74,-0.1 1.02,1 0.36,-0.05 0.32,-0.58 0.7,0.03 0.52,1.79 z"
              title="Busia"
              id="KE-04"
              className={selectedCounty === "busia" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Laikipia (LKP)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Laikipia_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 8 696 km<sup>2</sup>
                </p>
                <p>Population: 518 560</p>
                <p>Capital: Rumuruti</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 147.56705,262.76063 0,0 -0.36,1.9 10.7,0.01 1.01,-0.23 1.21,0.17 1.5,-0.61 1.23,-1.9 2.13,-0.63 1.27,0.77 1.06,3.17 0.56,0.32 -0.17,0.28 1.42,2.99 1.19,0.24 0.95,-0.39 0.62,0.67 0.33,-0.55 0.69,-0.27 -0.27,0.8 -0.2,3.63 -0.13,0.27 -0.46,-0.03 -0.21,1.63 -0.69,0.11 -0.23,0.5 -0.2,-0.06 -0.12,0.77 -0.25,-0.2 -0.95,0.92 -0.15,1.79 28.85,3.1 -0.55,0.64 0.03,1.5 -0.63,1.04 -0.04,0.94 0.34,1.62 0.48,0.21 0.43,1.45 0.53,0.29 -0.07,0.76 0.79,0.6 0.12,3.64 -0.33,0.22 -0.14,0.64 -0.64,0.19 -0.12,0.48 -0.73,0.52 0.41,0.41 -1.08,2.24 0.03,0.63 -0.86,0.23 0.26,0.46 -1.77,0.26 -1.51,1.56 -0.1,1.38 -1.46,1.72 -0.31,-0.4 -0.74,0.15 -0.09,1.08 -0.6,0.39 -1.96,1.02 -2,0.44 -0.8,0.6 -1.66,0.09 -1.29,0.95 0.86,0.92 0.41,1.11 1.21,0.97 -0.45,1.4 -2.69,-2.96 0.02,-0.71 -0.33,0.51 -0.45,-0.06 -0.67,0.68 -1.55,2.24 -2.71,1.24 0.38,3.67 0.58,0.61 0.74,0.26 -0.13,1.52 0.7,0.23 -0.56,2.31 0.27,0.6 -0.6,0.97 -0.75,0.4 0.44,0.89 -0.59,1.42 -1.38,-0.65 -4.77,-1.4 -0.52,-0.64 -0.8,0.3 -0.98,-3.24 0.71,0 1.09,-1.14 -0.72,-1.3 0.17,-0.66 -1.74,-0.44 0,-1.84 -2.19,0.18 -1.47,0.46 -0.11,-0.31 -0.62,0.66 -2.08,0.5 -0.29,0.41 -3.26,0.99 -1.19,-2.59 -3.42,-0.21 -1.2,-0.78 0.3,-0.61 -0.73,-0.71 2.01,-2.64 3.99,-0.3 -0.85,-1.89 -2.03,0.73 -0.58,-1.4 -0.05,-0.93 -0.82,-1.53 -3,1.27 -0.62,-2.09 -2.75,-3.15 -1.22,2.79 -1.03,0.35 -1.28,1.47 1.33,0.78 -0.6,0.37 -0.83,-0.03 0.02,0.41 -0.39,0.14 -0.4,-0.39 -0.04,0.32 -1.22,-0.96 -0.52,-1.15 -0.32,-0.11 -0.7,0.44 0.52,1.82 -2.46,0.85 -0.23,0.62 -0.29,0.03 -0.04,-0.41 -1.23,0.74 -0.23,1.17 -0.67,0.03 0.55,-2.76 -0.57,-1.71 0.82,-1.83 1,-1.33 -0.19,-0.92 -0.44,-1.18 -2.3,-3.48 -1.94,-1.47 0.76,-1 -1.79,-3.55 2.61,-6.42 3.7,-7.93 -1.05,-3.79 0.73,-0.74 3.2,-0.84 3.43,-3.31 3.93,-6.94 0.88,-0.47 z"
              title="Laikipia"
              id="KE-20"
              className={selectedCounty === "laikipia" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Kakamega (KKG)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Kakamega_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 3 033 km<sup>2</sup>
                </p>
                <p>Population: 1 867 579</p>
                <p>Capital: Kakamega</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 63.47705,260.43063 0,0 0.34,-0.39 0.79,-0.11 0.05,-0.24 0.46,0.17 0.26,-0.18 1.56,0.34 0.26,0.71 1.05,0.52 0.62,-0.38 -0.04,1.44 0.72,2.01 0.03,-0.4 0.31,-0.15 0.89,0.15 0.08,4.98 0.41,-0.02 -0.06,3.77 -0.21,0.43 0.28,0.26 -1.83,0.51 -0.55,0.7 -0.55,-0.36 -1.01,0.99 -0.88,0.05 -0.36,-0.24 -0.62,0.17 0.04,-0.41 -0.92,-0.25 0.09,0.61 -0.68,0.97 -1.67,-1.26 -0.2,0.35 -1.01,0.3 -0.69,0.85 -1.18,0.15 -1.36,0.89 -1.78,-0.81 0.4,0.37 -2.61,3.05 3.2,2.47 0.01,0.55 0.96,1.03 1.87,3.42 -0.11,2.76 -0.4,0.72 -0.67,-0.17 0.5,2.38 1.9,4.3 -1.27,-0.04 -0.78,1.94 -0.78,-0.01 -0.15,0.46 -1.27,0.21 -0.61,-0.64 -0.5,0.53 -0.55,-0.14 -0.41,0.28 -0.41,-0.22 -0.78,0.9 -1.28,-0.24 -0.72,0.19 0.25,0.38 0.01,0.89 -0.6,-0.13 -0.85,0.38 -0.26,-0.12 -2.19,1.35 -0.53,-0.34 0.02,-0.41 -1.23,0.53 -0.71,0.01 -0.01,0.48 -0.49,-0.19 -0.75,0.74 -0.36,-0.47 -3.2,0.17 -1.94,0.65 0.03,0.64 -0.79,0.49 -0.73,0.1 -0.29,-0.31 0.32,-0.43 -0.9,-0.38 0.47,-0.26 0.12,-0.57 -0.78,-0.6 -0.97,0.82 -0.63,-0.36 -0.3,0.7 -0.47,-0.53 -0.27,0.32 0.44,0.35 -0.47,0.27 -0.11,0.51 -0.78,-0.2 -0.34,0.17 0.02,-0.58 0.36,-0.14 -1.21,-0.45 -0.13,-0.43 0.85,-0.03 0.58,-0.41 0.01,-0.76 -0.85,-0.34 -1.74,0.66 -0.67,-0.37 0.56,-0.24 0.4,-0.65 -0.9,-1.07 0.59,-0.88 0.87,-0.26 -0.38,-0.68 -0.95,0.35 -1.59,1.53 -0.9,0.22 0.41,-1.45 -0.46,-1.26 0.82,-0.27 0.19,-1.57 -0.68,-0.79 0.42,-0.58 -1.5,-1.21 0.72,-0.67 0.17,-1.1 0.64,-0.37 0.27,-1.07 1.21,-0.67 -2.55,-1.76 -1.02,-0.07 -1,-1.08 1.02,-0.67 0.06,-1.18 0.74,-0.22 0.45,0.14 0.55,-0.56 0.96,-0.42 1.73,0.75 1.19,-0.34 1.27,-0.87 0.86,1.52 1.97,0.86 0.33,-1.05 0.75,-0.5 0.66,0.69 0.85,0.1 0.21,1.46 0.5,0.63 0.12,-1.46 0.74,-0.3 0.63,0.42 0.09,-0.75 0.54,-0.39 0.24,0.56 0.65,0.16 1.36,-0.52 0.66,-0.68 -0.16,-0.65 0.75,-0.12 0.75,-1.25 0.46,0.17 0.29,-0.3 0.38,0.11 0.31,-0.21 0.43,-0.43 0.23,-0.76 0.57,-0.2 0.65,-0.67 0.26,-0.93 1.85,-1.19 0.75,-0.11 -0.63,-0.77 0.97,-0.97 0.88,-0.45 0.36,-1.87 0.4,-0.66 0.73,-0.33 0.16,-0.51 1.22,0.03 0.59,-0.47 0.83,0.33 1.12,-0.93 0.18,-0.46 -0.42,-0.9 0.41,-0.87 0.62,0.04 0.51,-0.71 0.49,0.24 1.12,-0.45 1.15,0.67 0.81,-0.52 0.74,0.57 0.38,-0.51 0.5,0.19 -0.12,-0.39 0.37,-0.3 1.11,-0.15 0.18,-1.07 -0.2,-0.74 -0.65,-0.33 -0.63,-1 -0.77,-0.38 -0.16,-1.47 -0.67,-0.52 0.32,-1.6 z"
              title="Kakamega"
              id="KE-11"
              className={selectedCounty === "kakamega" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Uasin Gishu (UGS)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Uasin_Gishu_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 955 km<sup>2</sup>
                </p>
                <p>Population: 1 163 186</p>
                <p>Capital: Eldoret</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 83.02705,257.18063 0,0 1.05,0.52 0.39,-0.47 1.91,0.34 -0.25,1.73 3.08,0.43 -0.73,1.42 1.83,-0.05 0.25,1.02 -0.62,2.19 0.96,0.08 0.38,2.98 -0.28,0.32 -0.4,1.94 0.63,0.91 -0.04,0.46 -5.37,-0.07 4.08,6.57 -0.94,4.76 -0.16,3.19 0.09,1.2 0.93,1.04 0.17,1.19 -0.76,1.17 0.66,0.55 0.18,0.57 0.75,0.48 -0.09,1.62 0.32,0.4 -0.03,1.64 -0.48,0.79 0.2,0.31 -0.53,0.42 1.13,1.48 1.27,-0.35 0.71,0.3 -1.6,2.12 2.49,-0.04 0.65,-0.43 0.03,0.57 0.46,0.15 0.7,0.85 0.13,1.17 -0.91,2.01 -0.06,2.66 -1.83,-1.29 -0.08,0.56 0.31,0.45 -0.39,0.79 0.19,0.62 -0.85,0.04 -0.2,1.8 -0.39,-0.03 -0.14,0.42 -1.99,-0.39 -1.12,0.27 -0.07,-0.25 0.72,-0.28 -0.31,-0.42 -1.73,0.1 -1.78,-4.56 -0.43,-0.21 -0.59,0.41 -0.86,-1.45 -2,-0.91 0.23,-2.9 -2.1,-1 -4.56,-6.64 -1.73,-2.87 -1.01,-2.37 -2.07,-3 1.18,-1.86 0.3,-2.4 -0.51,0.45 -0.95,0.2 -0.7,-0.5 -0.68,-0.08 -0.58,-0.55 -0.38,0.88 -3.1,-1.28 -11.1,0.9 2.61,-3.05 -0.4,-0.37 1.78,0.81 1.36,-0.89 1.18,-0.15 0.69,-0.85 1.01,-0.3 0.2,-0.35 1.67,1.26 0.68,-0.97 -0.09,-0.61 0.92,0.25 -0.04,0.41 0.62,-0.17 0.36,0.24 0.88,-0.05 1.01,-0.99 0.55,0.36 0.55,-0.7 1.03,-0.46 0.79,-0.02 -0.27,-0.29 0.21,-0.43 0.06,-3.77 -0.41,0.02 -0.08,-4.98 -0.89,-0.15 -0.31,0.15 -0.03,0.4 -0.72,-2.01 0.04,-1.44 0.24,-0.28 -0.24,-0.43 0.21,-0.78 0.59,-0.33 0.09,-0.39 1.54,0.11 0.62,-0.31 0.39,0.15 1.04,-0.27 1.8,0.31 1.83,-1.2 0.85,0.32 0.51,0.78 0.85,0.36 0.72,1.36 1.39,-2.36 1.11,0.68 0.62,-1.41 z"
              title="Uasin Gishu"
              id="KE-44"
              className={
                selectedCounty === "uasin-gishu" ? "map active" : "map"
              }
            />
          </Popover>
          <Popover
            title="Garissa (GRS)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Flag_of_Garissa_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 45 720 km<sup>2</sup>
                </p>
                <p>Population: 841 353</p>
                <p>Capital: Garissa</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 308.12705,259.27063 0,0 0.86,-0.96 2.63,-1.65 5.85,-2.36 1.09,0.83 0.73,1.03 0.31,1.62 1.96,4.38 1.79,5.72 2.92,4.15 1.81,1.53 1.08,2.48 1.39,1.98 1.98,2.05 0.5,1.03 1.68,0.79 0.73,0.97 1.41,0.71 2.89,0.32 1.4,1.08 1.73,-0.22 2.23,1.85 2.01,1.15 1.94,0.61 2.66,0.37 3.93,2.85 1.86,0.96 4.15,4.19 5.59,3.04 2.51,0.15 1.55,0.74 1.36,-0.37 2.74,0.22 1.2,-0.65 0.7,0.29 0.39,-0.88 1.1,-1.04 1.82,0.6 1.2,0.03 0.51,-0.59 0.54,0.01 0.44,-0.42 2.03,0.04 1.95,-1.5 0.1,-0.73 0.63,-0.4 1.21,-2.4 1.11,-0.31 0.96,-1.03 1.21,-0.6 5.12,-1.42 1.33,-0.77 1.86,-1.8 3.37,-1.66 0.82,-0.66 0.04,73.95 32.57,43.94 -0.01,3.49 -37.68,3.2 -39.73,18.21 -0.63,-1.84 0,-1.16 -0.62,-1.18 0.19,-1.35 -0.11,-4.19 -1.4,-2.26 -0.3,-3.42 0.75,-2.28 -0.72,-1.51 0.1,-3.02 -0.34,-2.1 -0.62,-1.23 -1.62,-1.91 -0.55,-2.58 -1.03,-1.92 -0.93,-0.19 -1.84,1.13 -0.35,-0.19 -0.07,-0.29 0.39,-0.12 -0.36,-1 0.19,-0.41 -0.32,-0.18 0.26,-1.13 -0.17,-0.48 -0.38,-0.12 -0.15,-1.21 -0.74,-1.23 0.33,-0.28 -0.31,-0.82 -0.41,0.06 -0.07,-0.76 0.62,-1.07 -0.43,-0.27 -0.4,-1.41 0.4,-0.36 -0.29,-0.44 0.41,-0.42 -0.1,-0.5 0.41,-0.3 -0.18,-0.42 -0.42,-0.15 0.38,-0.83 -0.72,-0.1 0.26,-0.27 -0.24,-0.39 0.27,-0.67 -0.54,-0.13 -0.1,-0.59 -0.54,-0.01 0.07,-0.53 -1.04,-1.46 -0.4,-1.32 -0.62,-0.33 -0.07,-0.43 -0.42,0.1 -0.23,-0.22 -0.37,-2.94 -0.42,-0.09 -0.29,-0.65 0.21,-0.36 -0.5,-0.41 0.24,-0.5 -0.78,-0.82 -0.03,-1.22 -0.51,-0.06 -0.21,-0.3 0.33,-0.62 -0.39,-0.71 0.5,-0.21 -0.45,-0.32 -0.31,0.08 0.09,-1.05 -0.71,0.41 -0.03,-0.66 0.55,-0.57 -0.34,-0.51 -0.68,-0.1 0.22,-0.58 -0.73,-1.05 0.23,-0.29 -0.34,-0.26 0.55,-0.33 -0.47,-0.63 0.44,-1.25 -0.56,-0.37 -0.16,0.56 -0.28,0 0.09,-0.37 -0.35,-0.45 0.6,0.05 -0.11,-1.11 -0.55,-0.5 0.36,-0.38 -0.96,-0.03 0.5,-0.62 -0.51,-0.02 0.12,-0.67 -0.85,-0.24 -0.21,-0.31 0.42,-0.24 -0.42,-0.46 0.49,-0.2 -0.09,-0.51 0.47,-0.23 -0.91,-0.38 -0.15,-0.51 0.34,0.07 0.06,-1.28 -0.42,-0.07 0.15,-0.57 -0.29,0.2 -0.26,-0.39 -0.14,-0.57 0.24,-0.59 -0.53,0.05 -0.09,-0.65 -0.54,0.07 0.13,-0.55 -0.76,-1.3 0.44,-0.96 -0.63,-0.1 -0.52,-0.56 -0.38,0.23 -0.55,-0.52 -0.06,-0.48 -0.45,0.34 -1.94,-0.11 0.18,-0.54 -0.39,0.21 -0.03,-0.42 -0.41,-0.23 0.05,-1.3 -0.6,0.32 -0.21,-0.57 -0.52,0.09 -0.1,-0.63 0.38,-0.08 0.03,-0.28 -1.21,-0.86 -0.41,-0.54 -0.01,-0.67 -0.54,-0.31 -0.1,-1.09 0.37,-0.78 -0.91,-0.65 -0.01,-0.43 -0.27,0.24 -0.21,-0.16 0.19,-1.71 -0.69,-0.02 0.1,-0.65 -0.33,-0.22 -0.02,-0.83 -0.28,-0.2 0.3,-0.41 -0.23,-0.29 0.16,-0.3 -0.41,-0.11 0.13,-0.28 -0.26,-0.6 -0.39,0.16 -0.15,-0.43 -0.93,-0.46 -1.09,-2.2 -0.42,0.24 -0.54,-0.44 -0.3,0.55 -0.46,0.11 0.27,-0.93 -0.42,-0.27 -0.69,-1.65 -0.44,0.06 -0.1,-0.3 -0.65,-0.16 -0.42,-0.48 -0.14,-0.68 -0.8,-0.6 -0.48,-0.04 -1.01,-1.15 -1.19,0.04 -0.35,0.28 -0.19,-0.4 -0.73,0.12 -1.24,-1.59 -0.46,0.33 -0.1,-0.5 -0.77,0.42 -0.3,-0.58 -0.53,0.05 0.18,-0.7 -0.83,-0.72 -0.48,0.38 -0.54,-0.2 -0.76,0.3 -0.4,-0.24 -1.02,0.54 -0.15,-0.45 -0.47,0.17 -1.08,-0.19 -0.07,-0.48 -0.71,0.13 -0.65,0.6 -1.1,-0.43 -0.73,0.09 -0.41,-0.58 -1.59,0.22 -0.12,-0.63 -0.74,0.07 -0.03,-0.6 -1.05,-0.69 -0.22,-0.58 -1.36,-1.32 -0.5,-1.06 -1.68,0.42 -0.9,-0.62 -0.73,0.72 -0.33,-0.01 -0.23,-0.36 -0.61,0.6 -0.86,-0.03 -0.28,1.33 -0.7,0.21 -0.94,0.76 -0.41,-0.06 -0.63,-0.7 -1.18,0.55 -4.04,-0.19 -3.44,-1.34 -0.43,-0.35 0.29,-0.51 -0.73,-0.37 0.09,-0.58 -0.91,-2.47 -0.02,-1.07 -0.35,-0.91 -0.2,-2.57 0.25,-3.03 0.18,-0.59 1.15,-1.37 -0.07,-1.11 -4.52,-17.28 -0.84,-0.82 1.87,-0.06 0.6,0.21 0.27,-0.36 0.73,0.1 -0.1,-0.55 0.21,-0.22 0.66,0.36 0.88,-0.28 0.25,0.46 0.61,0.23 2.35,-2.31 1,-1.61 1.97,-1.12 0.66,-0.05 0.26,0.32 2,-0.26 0.88,-0.4 0.8,-1.29 2.15,0.41 0.49,-0.27 1.35,0.09 0.19,-0.87 0.59,-0.32 0.15,-1.06 0.43,-0.06 1.14,-1.2 1.81,0.61 0.68,-0.28 0.23,-0.51 2.31,-0.09 0.36,-0.9 1.57,-0.83 0.23,-1.73 1.27,-2.4 1.28,-1.46 0.68,-1.46 3.52,-3.64 z"
              title="Garissa"
              id="KE-07"
              className={selectedCounty === "garissa" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Bungoma (BGM)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Bungoma_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 206 km<sup>2</sup>
                </p>
                <p>Population: 1 670 570</p>
                <p>Capital: Bungoma</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 38.49705,245.40063 0,0 1.9,2.4 1.07,0.81 1.78,0.6 -0.59,1.45 4.86,6.93 1.67,0.97 0.96,-0.18 0.77,0.76 0.07,0.37 -0.78,0.86 1.47,3.92 -0.17,0.9 3.46,-1.22 3.33,-1.64 0.29,0.1 0.53,-0.98 0.97,-0.14 0.36,-0.41 1.19,-0.41 -0.03,0.28 1.87,-0.34 -0.32,1.57 0.67,0.55 -0.02,1.16 0.4,0.58 0.55,0.11 0.63,1 0.64,0.31 0.21,0.76 -0.2,1.09 -1.09,0.13 -0.37,0.3 0.12,0.39 -0.5,-0.19 -0.21,0.48 -0.42,0.04 -0.5,-0.58 -0.39,0.45 -0.45,0.06 -1.11,-0.66 -1.12,0.45 -0.49,-0.24 -0.51,0.71 -0.62,-0.04 -0.41,0.89 0.41,0.99 -1.09,1.22 -0.71,0 -0.32,-0.27 -0.59,0.47 -1.1,-0.08 -0.42,0.69 -0.6,0.2 -0.36,1.09 -0.32,0.21 0.14,0.53 -0.21,0.7 -0.88,0.45 -0.97,0.98 0.63,0.76 -0.75,0.11 -1.85,1.19 -0.26,0.93 -0.65,0.67 -0.57,0.2 -0.23,0.76 -0.43,0.43 -0.31,0.21 -0.38,-0.11 -0.29,0.3 -0.46,-0.17 -0.75,1.25 -0.75,0.12 0.16,0.65 -0.66,0.68 -1.36,0.52 -0.65,-0.16 -0.24,-0.56 -0.54,0.39 -0.09,0.75 -0.63,-0.42 -0.76,0.31 -0.1,1.45 -0.5,-0.63 -0.08,-1.34 -0.98,-0.22 -0.66,-0.69 -0.75,0.5 -0.33,1.05 -1.97,-0.86 -0.86,-1.52 -1.27,0.87 -1.21,0.34 -1.29,-0.71 -1.56,0.35 -0.21,-1.48 1.09,-0.3 0.19,-0.42 -1.04,-1.76 -1.24,-1.32 0.49,-0.97 -0.39,-0.65 -0.01,-0.94 0.32,0 0.19,-0.36 0.24,-1.77 1.95,-0.9 -0.45,-1.24 0.37,-0.5 -0.72,-2.22 1.1,-0.15 0.52,0.29 0.12,-0.82 -0.54,-1.5 -0.7,-0.03 -0.32,0.58 -0.36,0.05 -1.02,-1 -0.74,0.1 -0.5,-0.35 0.56,-0.38 0.3,-0.69 0.24,-0.1 0.15,0.23 0.15,-0.56 0.63,0.04 0.92,-0.44 -0.36,-1 0.49,-0.4 -0.04,-0.41 1.85,-1.21 0.23,-2.1 0.8,-0.65 0.86,-1.55 0.83,-5.99 0.56,-1.45 1.37,-2.04 0.02,-0.92 2.84,1.22 0.19,-2.87 z"
              title="Bungoma"
              id="KE-03"
              className={selectedCounty === "bungoma" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Trans Nzoia (TNZ)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Flag_of_Trans_Nzoia_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 2 469 km<sup>2</sup>
                </p>
                <p>Population: 990 341</p>
                <p>Capital: Kitale</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 52.18705,239.14063 0,0 5.17,-1.39 -0.26,1.84 3.77,0.33 1.2,-0.65 1.09,0.19 0.62,1.09 1.23,1.13 -0.53,0.67 0.37,0.53 2.37,1.45 0.22,-0.81 1.72,-0.27 0.41,0.24 1.6,-0.89 0.45,1.08 2.42,3.61 0.94,0.07 1.35,2.38 1.87,0.8 2.36,1.55 2.45,0.86 -0.03,0.56 -0.98,0.15 0.55,1.55 -0.73,0.34 -0.14,0.32 0.38,0.1 -0.17,0.17 0.21,0.93 0.93,0.11 -0.62,1.41 -1.11,-0.68 -1.39,2.36 -0.72,-1.36 -0.85,-0.36 -0.51,-0.78 -0.85,-0.32 -1.83,1.2 -1.8,-0.31 -1.04,0.27 -0.39,-0.15 -0.62,0.31 -1.5,-0.12 -0.13,0.4 -0.61,0.35 -0.19,0.76 0.23,0.47 -0.81,0.62 -0.92,-0.37 -0.53,-0.92 -2.16,-0.28 -0.07,0.25 -0.79,0.11 -0.34,0.39 -1.87,0.34 0.03,-0.28 -1.19,0.41 -0.36,0.41 -0.96,0.13 -0.54,0.99 -0.29,-0.1 -3.33,1.64 -3.46,1.22 0.17,-0.9 -1.47,-3.92 0.78,-0.86 -0.07,-0.37 -0.77,-0.76 -0.96,0.18 -1.67,-0.97 -4.86,-6.93 0.59,-1.45 -1.78,-0.6 -1.07,-0.81 -1.9,-2.4 3.3,-1.24 1.44,-1.12 0.43,-0.93 4.2,-0.71 1.34,0.22 0.4,-0.25 1.1,0.08 0.97,-1 0.51,-1.31 z"
              title="Trans Nzoia"
              id="KE-42"
              className={
                selectedCounty === "trans-nzoia" ? "map active" : "map"
              }
            />
          </Popover>
          <Popover
            title="Elgeyo-Marakwet (EMK)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/87/Elgeyo_Marakwet_Flag.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 3 049 km<sup>2</sup>
                </p>
                <p>Population: 454 480</p>
                <p>Capital: Iten</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 102.63705,239.91063 0,0 -0.26,0.46 0.28,0.67 -0.42,1.33 0.36,0.22 0.2,1.26 -0.15,1.41 0.33,0.2 -0.5,1.19 -0.11,1.35 -0.33,0 -0.52,0.5 -0.02,0.45 -0.36,0.09 -0.31,0.91 0.21,0.6 -0.4,0.64 0.18,0.22 -0.29,0.06 -0.09,0.49 -0.49,0.14 -0.05,0.27 -0.39,-0.08 -0.31,0.27 0.11,0.5 -0.64,1.3 0.36,0.65 -0.22,0.22 0.04,1.05 -0.36,0.42 0.36,1.96 -0.21,0.45 -0.4,0.11 -0.16,2.28 0.16,0.81 0.99,0.79 -0.4,0.28 0.02,0.55 0.36,0.29 -0.49,0.62 0.19,1.27 -0.22,0.14 -0.46,2.27 -0.31,0.39 0.61,0.97 0.26,1.18 -0.46,0.63 0.11,0.17 -0.31,0.06 0.09,0.39 -1.15,0.32 0.22,1.6 -0.7,1.16 -0.05,0.69 0.11,0.54 0.85,0.69 -0.02,0.98 -0.6,1.05 0.02,1.25 0.54,0.59 0.07,0.78 1.02,0.45 0.04,1.2 0.83,1.21 -0.07,0.54 0.35,0.26 0.09,1.19 0.4,0.59 -0.31,0.97 0.31,0.71 0.38,-0.01 0.1,0.45 0.65,0.48 0.51,-0.03 0.43,0.41 0.13,-0.3 1.35,1.02 -0.66,2.27 0.24,0.53 -0.39,2.45 0.68,1.38 0.09,1.27 -1.69,1.33 0.19,1.12 -6.24,0.03 -0.59,-0.85 -0.46,-0.15 -0.03,-0.57 -0.65,0.43 -2.49,0.04 1.6,-2.12 -0.71,-0.3 -1.27,0.35 -1.13,-1.48 0.53,-0.42 -0.2,-0.31 0.48,-0.79 0.03,-1.64 -0.32,-0.4 0.09,-1.62 -0.75,-0.48 -0.18,-0.57 -0.66,-0.55 0.76,-1.17 -0.17,-1.19 -0.93,-1.04 -0.09,-1.2 0.16,-3.19 0.94,-4.76 -4.08,-6.57 5.37,0.07 0.04,-0.46 -0.63,-0.91 0.4,-1.94 0.28,-0.32 -0.38,-2.98 -0.96,-0.08 0.61,-1.9 -0.24,-1.3 -1.83,0.04 0.73,-1.42 -3.08,-0.43 0.25,-1.73 -1.91,-0.34 -0.39,0.47 -1.05,-0.52 -0.93,-0.11 -0.21,-0.93 0.17,-0.17 -0.38,-0.1 0.14,-0.32 0.73,-0.34 -0.55,-1.55 0.98,-0.15 0.03,-0.56 -2.45,-0.86 -2.36,-1.55 -1.87,-0.8 -1.35,-2.38 -0.94,-0.07 -2.42,-3.61 -0.45,-1.08 9.85,4.74 1.78,-0.89 10.76,-8.75 1.82,-0.37 0.55,0.48 1.3,0.18 1.78,-1.33 3.24,-0.9 -0.09,2.04 0.42,0.66 0.26,0.02 -0.39,0.75 0.19,0.68 z"
              title="Elgeyo-Marakwet"
              id="KE-05"
              className={
                selectedCounty === "elgeyo-marakwet" ? "map active" : "map"
              }
            />
          </Popover>
          <Popover
            title="Baringo (BRG)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Flag_of_Baringo_County.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 11 075 km<sup>2</sup>
                </p>
                <p>Population: 666 763</p>
                <p>Capital: Kabarnet</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 102.88705,229.89063 0,0 -0.08,-0.96 0.97,-1.15 -0.22,-0.78 1.07,-1.4 1.22,-0.61 0.93,-2.46 0.44,-0.54 0.59,-3.65 -0.77,-0.37 -0.19,-0.77 0.89,-1.15 17.42,28.26 4.42,-0.08 8.17,10.27 1.34,-0.11 0.56,1.55 0.7,0.15 0.26,0.43 0.84,0.08 0.37,0.38 -0.14,1.14 0.53,1.27 0.41,0.3 0.87,-0.1 0.66,1.01 0.89,0.74 0.91,0.1 1.62,1.32 -0.88,0.47 -3.93,6.94 -3.43,3.31 -3.2,0.84 -0.73,0.74 1.05,3.79 -3.7,7.93 -2.61,6.42 1.79,3.55 -0.76,1 -1.39,0.36 0.32,0.47 0.66,0.22 0.12,0.98 -2.84,0.77 -1.18,7.23 -1.26,-0.12 0.39,3.16 -1.06,1.13 -2.42,-1.04 -0.62,-0.95 -1.95,-0.58 -0.53,-1.64 -1.85,0.16 0.01,-1.2 -0.25,-0.54 -1.18,-0.45 -0.61,1.47 2.76,3.12 -0.33,1.39 -0.69,1.31 -0.65,1.11 -1.22,1.18 0.05,0.29 -0.6,0.27 -0.98,-1.93 -0.35,0.2 -1,-0.89 -3.15,4.77 -0.84,-1.11 -0.94,0.66 0.03,2.89 -1.02,1.72 0.46,0.15 -0.96,1.72 -0.44,0.08 -0.62,-0.4 -0.64,0.05 -0.5,-0.45 -0.15,-2.25 0.39,-0.73 -1.33,-2.14 -0.77,-0.75 -0.25,-0.78 0.05,-1.15 -1.17,-0.12 -1.08,0.42 -0.85,-1.54 0.22,-0.23 -0.35,-0.81 -1.26,-0.2 -1.58,-1.42 -2.23,0.05 -1.18,-1.37 0.2,-1.8 0.85,-0.04 -0.19,-0.62 0.39,-0.79 -0.31,-0.45 0.08,-0.56 1.83,1.29 0.06,-2.66 0.91,-2.01 -0.13,-1.17 6.13,-0.03 -0.19,-1.12 1.69,-1.33 -0.09,-1.27 -0.68,-1.38 0.39,-2.45 -0.24,-0.53 0.66,-2.27 -1.35,-1.02 -0.13,0.3 -0.43,-0.41 -0.51,0.03 -0.65,-0.48 -0.1,-0.45 -0.38,0.01 -0.31,-0.71 0.31,-0.97 -0.4,-0.59 -0.09,-1.19 -0.35,-0.26 0.07,-0.54 -0.83,-1.21 -0.04,-1.2 -1.02,-0.45 -0.07,-0.78 -0.54,-0.59 -0.02,-1.25 0.6,-1.05 0.02,-0.98 -0.85,-0.69 -0.11,-0.54 0.05,-0.69 0.7,-1.16 -0.22,-1.6 1.15,-0.32 -0.09,-0.39 0.31,-0.06 -0.11,-0.17 0.46,-0.63 -0.26,-1.18 -0.61,-0.97 0.31,-0.39 0.46,-2.27 0.22,-0.14 -0.19,-1.27 0.49,-0.62 -0.36,-0.29 -0.02,-0.55 0.4,-0.28 -0.99,-0.79 -0.16,-0.81 0.16,-2.28 0.4,-0.11 0.21,-0.45 -0.36,-1.96 0.36,-0.42 -0.04,-1.05 0.22,-0.22 -0.36,-0.65 0.64,-1.3 -0.11,-0.5 0.31,-0.27 0.39,0.08 0.05,-0.27 0.49,-0.14 0.09,-0.49 0.29,-0.06 -0.17,-0.23 0.41,-0.89 -0.2,-0.54 0.24,-0.12 0.04,-0.59 0.38,-0.12 0.12,-0.55 0.73,-0.37 0.11,-1.35 0.5,-1.19 -0.33,-0.2 0.15,-1.41 -0.2,-1.26 -0.36,-0.22 0.42,-1.33 -0.28,-0.67 0.26,-0.46 -0.19,-0.68 0.39,-0.75 -0.26,-0.02 -0.42,-0.66 -0.05,-0.81 0.24,-0.4 -0.23,-0.02 0.31,-1.29 -0.69,-1.13 0.19,-1.16 0.65,-1.02 -0.19,-0.13 0.17,-0.64 0.55,-0.12 -0.3,-0.28 0.28,-0.36 -0.2,-0.55 z"
              title="Baringo"
              id="KE-01"
              className={selectedCounty === "baringo" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Isiolo (ISL)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Isiolo_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 25 336 km<sup>2</sup>
                </p>
                <p>Population: 268 002</p>
                <p>Capital: Isiolo</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 230.83705,238.97063 0,0 22.55,-17.99 2.48,-10.51 33.13,-19.23 1.3,1.59 -0.06,0.93 0.49,0.75 -0.19,0.71 0.27,1.04 1.45,1.84 0.88,0.59 1.09,1.92 0.53,0.31 0.29,0.78 1.52,1.41 0.4,0 0.58,0.69 1.08,0.67 0.78,1.38 -0.04,0.66 1.49,2.25 0.59,2.16 1.91,3.2 0.95,0.15 2.03,1.21 0.53,0.01 1.45,1.07 0.44,0.01 0.3,0.65 0.32,-0.06 0.4,0.52 1.1,0.53 1.61,2.32 0.72,0.62 0.08,0.5 0.42,0.03 0.29,0.7 0.91,0.15 1.3,1.19 0.49,0.13 -9.88,3.4 10.65,27.06 -5.85,2.35 -2.67,1.68 -4.34,4.57 -0.68,1.46 -1.28,1.46 -1.27,2.4 -0.23,1.73 -1.57,0.83 -0.38,0.91 -2.29,0.08 -0.23,0.51 -0.68,0.28 -1.81,-0.61 -1.14,1.2 -0.43,0.06 -0.15,1.06 -0.59,0.32 -0.19,0.87 -1.35,-0.09 -0.49,0.27 -2.15,-0.41 -0.8,1.29 -0.88,0.4 -2,0.26 -0.26,-0.32 -0.66,0.05 -1.97,1.12 -1,1.61 -2.35,2.31 -0.61,-0.23 -0.25,-0.46 -0.88,0.28 -0.66,-0.36 -0.21,0.22 0.1,0.55 -0.73,-0.1 -0.27,0.36 -0.6,-0.21 -1.87,0.06 0.84,0.82 4.52,17.28 0.07,1.11 -1.15,1.37 -0.18,0.59 -0.23,4.03 0.55,3.55 0.91,2.47 -0.09,0.58 0.73,0.37 -0.29,0.51 0.43,0.35 -0.94,0.17 -2.15,-0.67 -1.37,-1.16 -0.42,0.8 -1.45,-0.49 -0.48,0.39 -0.56,0.01 -1.54,-1.34 -0.57,0.25 -1.91,-0.91 -0.83,-0.1 -0.69,0.88 -0.08,0.65 -0.6,-0.01 0.05,0.68 -0.58,0.45 -1.81,-0.17 -0.44,0.91 -1.13,0.53 -0.49,0.01 -0.9,-0.79 -0.21,0.25 -0.38,-0.04 -0.89,-0.61 0.07,-0.72 -0.39,-0.54 0.04,-0.81 -0.38,-0.3 0.05,-0.44 -1.23,-0.7 -0.14,-0.45 -1.13,-0.92 -0.01,-1.03 -0.72,-0.35 0.27,-0.95 -0.49,0.03 -0.01,-0.4 -0.93,-0.5 0.29,-1.07 -1.24,-0.96 -0.55,-2.66 -1.79,-1.26 -0.26,-0.58 -1.06,-0.85 -2.73,-1.23 -0.03,-5.37 -1.11,-0.43 -6.59,-19.29 -13.45,6.04 -13.69,4.61 0.01,0.72 -0.31,0.45 0.01,2.33 0.24,1.04 0.75,0.02 0.26,2.33 -1.28,1.9 -1.45,-0.02 -0.16,0.22 -0.31,0.53 0.18,0.49 -0.16,1.55 -0.61,0.86 -4.16,-1.09 -2.08,-0.84 -1.62,0.09 0,0.69 -0.78,0.55 0.56,-1.43 -0.25,-0.73 0.04,-2.34 -0.79,-0.6 0.07,-0.76 -0.53,-0.29 -0.43,-1.45 -0.48,-0.21 -0.34,-1.62 0.04,-0.94 0.63,-1.04 -0.03,-1.5 0.55,-0.64 -28.85,-3.1 0.15,-1.79 0.95,-0.92 0.25,0.2 0.12,-0.77 0.2,0.06 0.23,-0.5 0.69,-0.11 0.21,-1.63 0.46,0.03 0.13,-0.27 0.2,-3.63 0.41,-1.44 0.78,0.58 1.86,-0.03 4.42,-1.59 0.67,0.37 0.16,-0.76 1.7,-0.48 0.45,0.38 0.43,-0.15 0.39,0.31 0.23,0.65 0.47,0.41 0.87,-0.08 0.04,0.45 0.54,0.08 0.38,0.51 1.92,-0.22 0.23,0.29 0.79,0.12 1.54,-1.35 0.6,-0.04 1.01,1.14 0.8,0.42 0.64,0.89 1.79,4.03 0.63,0.26 0.58,1.39 0.07,1.19 0.54,0.08 0.09,0.7 0.54,-0.03 0.95,0.63 1.88,-0.17 0.23,-0.21 1.09,0.16 1.33,-0.74 0.43,0.3 0.79,-0.04 0.03,0.72 2.27,0.63 0.75,-0.73 0.71,0.4 1.34,-0.1 0.15,-0.9 1.28,-0.18 0.73,-0.49 0.81,0.17 0.52,-0.88 -0.26,-0.13 0.07,-0.38 0.68,-0.61 0.83,-0.03 0.92,-0.57 0.55,-1.17 1.05,-0.24 0.84,0.72 1.31,-1.23 0.64,0.21 0.92,-0.31 0.89,0.33 2.43,-0.43 0.72,-0.56 -0.13,-0.8 0.23,-0.46 1.64,-1.07 -0.16,-0.31 0.26,-0.48 0.66,0.3 1.38,1.54 1.36,-1.05 0.23,-0.49 1.02,-0.71 0.77,-0.18 0.49,-0.87 1.68,-1.31 -0.12,-0.43 0.23,-0.21 0.25,0.08 -0.02,0.31 0.48,0 1.31,0.71 0.18,0.34 1.74,-0.11 -1.88,-1.4 -0.96,-16.02 -4.72,-6.24 -0.17,-3.92 z"
              title="Isiolo"
              id="KE-09"
              className={selectedCounty === "isiolo" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Samburu (SBR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Samburu_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 20 182 km<sup>2</sup>
                </p>
                <p>Population: 310 327</p>
                <p>Capital: Maralal</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 161.73705,167.42063 0,0 1.15,-0.13 4.97,13.8 1.27,1.2 1.78,3.55 0.35,2.01 0.7,1.77 -0.15,1.47 0.42,0.03 0.06,2.36 -0.3,2.3 0.49,0.08 1.46,-0.48 3.27,2.28 5.12,0.11 4.74,1.38 0.64,1.64 2.36,1.73 0.71,1 1.23,0.23 2.29,6.48 2.54,1.33 5.29,8.85 1.5,1.89 5.06,9.04 1.1,0.94 0.29,0.51 -0.15,0.32 0.46,-0.17 0.6,-1.33 0.5,0.88 0.84,-0.04 0.06,-0.39 0.41,0 1.33,-0.98 0.25,0.32 0.95,-0.45 0.55,0.24 1.51,-0.48 1.53,-0.01 0.62,-0.34 1.19,-0.03 0.26,0.24 0.52,-0.56 0.66,0.31 1.34,-0.5 0.51,0.12 0.96,-0.29 0.54,-1.9 5.63,4.12 -0.31,7.1 0.17,3.92 4.72,6.24 0.96,16.02 1.88,1.4 -1.74,0.11 -0.18,-0.34 -1.31,-0.71 -0.48,0 0.02,-0.31 -0.25,-0.08 -0.23,0.21 0.12,0.43 -1.68,1.31 -0.49,0.87 -0.77,0.18 -1.02,0.71 -0.23,0.49 -1.36,1.05 -1.38,-1.54 -0.66,-0.3 -0.26,0.48 0.16,0.31 -1.64,1.07 -0.23,0.46 0.13,0.8 -0.72,0.56 -2.43,0.43 -0.89,-0.33 -0.92,0.31 -0.64,-0.21 -1.31,1.23 -0.84,-0.72 -1.05,0.24 -0.55,1.17 -0.92,0.57 -0.83,0.03 -0.68,0.61 -0.07,0.38 0.26,0.13 -0.52,0.88 -0.81,-0.17 -0.73,0.49 -1.28,0.18 -0.15,0.9 -1.34,0.1 -0.71,-0.4 -0.75,0.73 -2.27,-0.63 -0.03,-0.72 -0.79,0.04 -0.43,-0.3 -1.33,0.74 -1.09,-0.16 -0.23,0.21 -1.88,0.17 -0.95,-0.63 -0.54,0.03 -0.09,-0.7 -0.54,-0.08 -0.07,-1.19 -0.58,-1.39 -0.63,-0.26 -1.79,-4.03 -0.64,-0.89 -0.8,-0.42 -1.12,-1.18 -0.49,0.08 -1.54,1.35 -0.79,-0.12 -0.23,-0.29 -1.92,0.22 -0.38,-0.51 -0.54,-0.08 -0.04,-0.45 -0.87,0.08 -0.47,-0.41 -0.23,-0.65 -0.39,-0.31 -0.43,0.15 -0.4,-0.38 -1.75,0.48 -0.16,0.76 -0.67,-0.37 -2.81,1.18 -1.61,0.41 -0.38,-0.15 -0.43,0.28 -1.05,-0.1 -0.76,-0.59 -0.19,0.65 -0.66,0.27 -0.18,0.51 -0.36,0.04 -0.11,-0.51 -0.33,-0.16 -1.24,0.4 -0.19,-0.27 -0.68,0.02 -1.42,-2.99 0.17,-0.28 -0.56,-0.32 -1.06,-3.17 -1.27,-0.77 -2.13,0.63 -1.23,1.9 -1.5,0.61 -1.21,-0.17 -1.01,0.23 -10.7,-0.01 0.25,-2.11 -1.51,-1.11 -0.91,-0.1 -0.89,-0.74 -0.66,-1.01 -0.87,0.1 -0.41,-0.3 -0.16,-0.75 1.47,-1.03 1.42,-1.96 0.16,-0.75 -0.34,-1.04 0.36,0.15 0.15,1.11 0.63,0.11 -0.05,-1.04 -0.31,-0.05 0.02,-0.98 -0.68,-1.61 -0.06,-1.4 0.2,-0.34 -0.38,-0.75 0.42,-1.54 -0.65,-1.61 0.51,-1.8 -1.35,-0.78 -1.51,0.77 -0.04,-0.64 -0.26,-0.13 0.54,-0.42 -0.14,-1.49 0.27,-0.38 0.78,-0.33 0.1,0.34 0.23,-0.03 0.2,-0.55 -0.47,-0.57 0,-0.74 -0.54,0.47 -0.93,-0.69 0.19,-0.35 0.28,0 -0.06,-0.42 0.53,0.24 0.23,-0.37 0.84,0.69 0.9,0.33 0.44,0.58 0.41,-0.19 0,-0.41 -0.16,-0.63 -0.86,-0.96 0.12,-0.76 -0.29,-0.09 -0.76,0.56 -0.91,-0.34 -0.09,-0.44 -0.65,-0.27 0.87,-0.35 0.25,-0.55 0.63,-0.47 0.07,-0.63 0.73,-0.24 0.14,-0.46 0.9,-0.52 0.28,0.02 0.47,-1.7 -0.31,-0.28 -0.34,0.3 -0.44,-0.79 -1.13,0.22 -0.04,-0.39 -0.56,-0.15 -1.58,-1.56 -1.92,0.51 -0.46,-0.16 -1.69,-1.78 -1.7,0.34 -0.11,-0.34 0.63,-1.05 -0.22,-0.79 0.13,-1.78 0.21,-0.51 2.3,-2.05 0.05,0.41 1.1,-0.07 -0.13,-0.9 0.52,-0.45 0.45,0.62 -0.31,1.21 0.15,0.9 0.74,1.44 0.49,0 0.94,-2.19 1.22,-1.34 -0.01,-0.77 0.53,-1.01 0.37,-0.16 0.38,0.34 0.69,-0.13 -0.2,-0.44 0.48,-1.2 -0.03,-0.85 0.51,-0.59 -0.05,-0.51 0.42,-0.31 -0.07,-1.14 0.96,-0.33 -0.09,-0.51 0.32,-0.23 0.04,-0.56 0.74,-0.55 0.03,-0.29 -0.3,-0.14 0.65,-0.37 -0.21,-0.67 -0.47,0.6 0.1,-0.26 -0.43,-0.61 0.51,0.36 0.08,-0.47 -0.25,-0.2 0.35,-0.1 0.15,-0.43 -0.21,-0.3 0.4,-0.03 0.23,-0.77 -0.59,-0.04 -0.33,-0.57 -0.12,-0.57 0.45,0.06 0.13,-0.4 -0.23,-0.2 0.32,-0.63 -0.29,-0.38 -0.34,0.2 -0.03,-1.54 0.67,-0.39 0.04,-0.51 0.71,-0.37 -0.14,-0.46 0.32,-1.14 -0.2,-0.28 0.01,-1.84 -0.56,0.58 0.18,-0.6 0.47,-0.41 0.24,-1.01 -0.16,-0.75 0.06,-0.27 0.34,-0.02 -0.08,-1.34 0.25,-0.06 0.37,-0.99 0.71,-0.53 -0.26,-2.62 0.89,-0.97 0.45,-1.42 0.43,-0.05 0.87,-0.92 0.01,0.37 1.51,-0.44 1.14,-0.55 1.46,-1.14 1.09,-0.31 -0.05,-1.11 0.65,-0.35 -0.13,-0.76 0.27,-0.58 -0.41,-0.81 0.93,-0.75 0.05,-1.49 -7.02,-3.37 0,-2.62 0.45,0.53 0.58,-0.19 0.18,-0.9 0.47,0.15 0.21,0.43 0.3,-0.32 -0.08,1.1 0.32,-1.52 0.2,0.28 0.53,-0.37 0.85,-1.46 0.76,-0.72 0.81,0.16 -0.06,-0.63 0.33,-0.73 -0.2,-1.91 0.51,0.24 1.59,-0.32 z"
              title="Samburu"
              id="KE-37"
              className={selectedCounty === "samburu" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="West Pokot (WPK)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_West_Pokot_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 8 418 km<sup>2</sup>
                </p>
                <p>Population: 621 241</p>
                <p>Capital: Kapenguria</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 69.74705,161.18063 0,0 0.4,-1.65 0.15,0.32 1.35,-0.13 0.79,0.66 2.89,6.11 -0.27,2.43 0.13,1.45 0.52,1.19 -0.48,1.68 0.77,1.91 -0.26,1.57 1.66,1.12 0.57,0.68 1.74,3.42 0.96,4.04 3.04,10.14 0.1,2.63 0.33,1.04 -0.41,0.24 -0.39,0.85 4.38,4.4 0.43,0.11 0.03,0.28 0.79,0.16 0.28,0.66 -0.24,0.55 0.29,0.23 -0.33,0.51 0.77,0.28 0.03,0.45 0.22,-0.09 0.02,0.35 0.53,0.12 0.8,0.77 0.28,0.66 0.81,-0.25 1.03,0.1 2.34,0.86 1.07,-0.39 0.89,0.76 0.53,0.09 0.04,-0.21 1.69,0.52 0.74,0.78 1.6,0.93 1.27,0.06 2.42,2.06 1.71,0.39 -0.91,1.18 0.19,0.77 0.77,0.37 -0.59,3.65 -0.44,0.54 -0.91,2.43 -1.24,0.64 -0.53,0.56 0.06,0.31 -0.61,0.57 0.23,0.6 -0.15,0.54 -0.82,0.75 0.02,1.28 0.26,0.19 -0.28,0.4 0.3,0.28 -0.5,0.03 -0.22,0.7 0.18,0.21 -0.83,1.55 0.24,0.85 -0.21,0.07 0.41,0.13 0.25,0.66 -0.18,0.48 -3.24,0.9 -1.78,1.33 -1.3,-0.18 -0.55,-0.48 -1.82,0.37 -10.76,8.75 -1.78,0.89 -9.85,-4.74 -1.6,0.89 -0.41,-0.24 -1.72,0.27 -0.22,0.81 -2.37,-1.45 -0.37,-0.53 0.53,-0.67 -1.23,-1.13 -0.62,-1.09 -1.09,-0.19 -1.2,0.65 -3.77,-0.33 0.26,-1.84 -5.05,1.24 0.57,-0.52 -0.14,-2.15 -2.09,-2.95 0.61,-0.72 -0.88,-2.46 2.97,-2.08 1.02,0.01 0.3,-4.23 0.97,-0.54 0.36,-1.13 0.88,0.19 0.45,-0.67 0.58,0.05 1.25,-0.74 2.61,-5.09 0.73,-9.9 1.45,-4.91 -2.4,-3.23 -0.05,-1.07 -1.1,-3.68 1.63,-1.67 -1.49,-5.38 -1.85,-3.5 -1.7,-4.14 -1.26,-3.75 -0.12,-1.43 1.16,-1.65 1.27,-0.74 1.16,-0.16 -0.12,0.14 1.74,0.95 2.32,1.88 -0.17,-1.21 0.72,-0.51 0.04,-0.55 -1.43,-2.02 0.88,-4.76 0.33,-0.39 0.47,0.22 0.21,1.38 1.58,2.93 0.48,1.47 0.59,-0.15 1.12,-0.87 0.65,-1.35 0.17,-1.36 -0.32,-1.48 0.65,-2.69 0.64,-1.2 z"
              title="West Pokot"
              id="KE-47"
              className={selectedCounty === "west-pokot" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Wajir (WJR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Wajir_County_Flag.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 55 840 km<sup>2</sup>
                </p>
                <p>Population: 781 263</p>
                <p>Capital: Wajir</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 309.31705,112.57063 0,0 1.02,0.32 2.31,-0.11 1.55,0.28 0.57,-0.2 0.26,0.35 0.63,-0.32 0.13,0.5 0.31,-0.18 0.33,0.26 0.18,-0.26 0.68,0.28 0.91,-0.34 0.71,0.1 0.42,-0.43 0.38,0.15 0.1,-0.3 1.36,0.2 0.85,-0.35 0.73,0.38 3.23,-2 9.48,-9.57 0.66,19.17 14.71,6.25 7.92,8.67 4.98,5.85 12.76,5.87 0.2,0.95 -0.15,0.78 0.26,0.25 -0.23,0.89 0.57,0.37 -0.63,0.68 0.66,0.28 0,0.6 0.99,0.49 -0.05,1.98 -0.44,0.15 -0.28,0.62 -0.43,0.23 0.08,0.41 1.06,1.18 0.39,1.81 1.05,1.85 0.43,2.21 0.48,0.39 -0.17,0.45 1.26,1.64 0.02,1.27 0.9,0.88 -0.31,0.63 0.66,0.51 0.21,0.92 1.51,1.96 1.56,0.74 0.38,1.32 -0.11,0.56 0.6,0.71 0.06,0.49 1.88,1.53 0.55,1.18 0.74,0.58 1.35,0.19 1.34,0.56 1.92,1.54 1.45,0.18 0.22,0.62 1.93,2.24 2.25,1.9 1.71,0.82 2.65,-0.12 -0.01,98.06 -0.82,0.66 -3.37,1.66 -1.86,1.8 -1.33,0.77 -5.12,1.42 -1.21,0.6 -0.96,1.03 -1.11,0.31 -1.21,2.4 -0.63,0.4 -0.1,0.73 -1.95,1.5 -2.03,-0.04 -0.44,0.42 -0.54,-0.01 -0.51,0.59 -1.2,-0.03 -1.82,-0.6 -1.1,1.04 -0.39,0.88 -0.7,-0.29 -1.2,0.65 -2.74,-0.22 -1.36,0.37 -1.55,-0.74 -2.51,-0.15 -5.59,-3.04 -4.15,-4.19 -1.86,-0.96 -3.93,-2.85 -2.66,-0.37 -1.94,-0.61 -2.01,-1.15 -2.23,-1.85 -1.73,0.22 -1.4,-1.08 -2.89,-0.32 -1.41,-0.71 -0.73,-0.97 -1.69,-0.8 -0.49,-1.02 -1.98,-2.05 -1.39,-1.98 -1.08,-2.48 -1.81,-1.53 -2.92,-4.15 -1.79,-5.72 -1.96,-4.38 -0.31,-1.62 -0.73,-1.03 -1.09,-0.83 -3.59,-8.66 -7.06,-18.39 9.88,-3.4 -0.49,-0.13 -1.3,-1.19 -0.91,-0.15 -0.29,-0.7 -0.42,-0.03 -0.08,-0.5 -0.72,-0.62 -1.61,-2.32 -1.1,-0.53 -0.4,-0.52 -0.32,0.06 -0.3,-0.65 -0.44,-0.01 -1.45,-1.07 -0.53,-0.01 -2.03,-1.21 -0.95,-0.15 -1.91,-3.2 -0.59,-2.16 -1.49,-2.25 0.04,-0.66 -0.74,-1.32 -1.7,-1.42 -0.4,0 -1.52,-1.41 -0.29,-0.78 -0.53,-0.31 -1.09,-1.92 -0.88,-0.59 -1.43,-1.79 -0.29,-1.09 0.19,-0.71 -0.49,-0.75 0.06,-0.93 -1.78,-2.09 -1.04,-3.1 0.13,-3.12 -0.7,-3.89 0.58,-1.89 -0.27,-1.71 0.19,-1.54 -0.39,-2.29 -1.47,-3.75 -0.78,-3.68 5.04,-1.39 3.81,-6.25 -0.43,-0.79 0.71,-0.82 0.24,-1.27 0.77,-0.64 -0.05,-8.28 2.67,-0.06 0.67,-2.75 0.8,-0.42 0.56,-0.81 3.13,-0.23 2.63,-1.84 0.08,-0.39 2.28,-2.26 1.98,-1 1.3,-0.99 -0.29,-10.61 -0.19,-1.26 -0.58,-0.65 -0.84,-6.76 -0.67,-1.14 -0.12,-0.8 0.28,-0.87 0.77,-0.92 z"
              title="Wajir"
              id="KE-46"
              className={selectedCounty === "wajir" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Mandera (MDR)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_Mandera_County%2C_Kenya.svg"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 25 797 km<sup>2</sup>
                </p>
                <p>Population: 867 457</p>
                <p>Capital: Mandera</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 440.98705,83.65063 0,0 0.28,-0.44 0.32,0.27 0.23,-0.39 0,0.5 0.4,-0.11 0.71,0.74 0.88,-0.12 0.33,0.5 0.33,-1.01 0.31,0.31 0.27,-0.52 1.16,-0.3 0.28,-0.48 0.24,0.36 0.51,0.1 0.16,-0.43 0,0.56 0.34,-0.21 0.81,0.19 0.1,0.6 1.08,0.01 0.37,-0.5 0.39,0.28 0.39,-0.27 -0.02,0.49 0.32,0.13 -0.28,0.14 0.24,0.62 1.26,0.01 -0.02,0.47 0.28,0.14 0.18,-0.27 0.39,0.44 0.04,-0.51 0.37,-0.03 0.45,0.39 0.23,-0.15 0.02,-0.59 0.63,0.05 0.15,-0.4 0.22,0.24 0.55,-0.21 0.11,-0.37 0.84,-0.48 0.44,0.27 -33.04,47.12 -19.2,18.83 -0.03,36.94 -2.65,0.12 -1.71,-0.82 -2.25,-1.9 -1.93,-2.24 -0.22,-0.62 -1.45,-0.18 -1.92,-1.54 -1.34,-0.56 -1.35,-0.19 -0.74,-0.58 -0.55,-1.18 -1.88,-1.53 -0.06,-0.49 -0.6,-0.71 0.11,-0.56 -0.38,-1.32 -1.56,-0.74 -1.51,-1.96 -0.21,-0.92 -0.66,-0.51 0.31,-0.63 -0.9,-0.88 -0.02,-1.27 -1.26,-1.64 0.17,-0.45 -0.48,-0.39 -0.43,-2.21 -1.05,-1.85 -0.39,-1.81 -1.06,-1.18 -0.08,-0.41 0.43,-0.23 0.28,-0.62 0.44,-0.15 0.05,-1.98 -0.99,-0.49 0,-0.6 -0.66,-0.28 0.63,-0.68 -0.57,-0.37 0.23,-0.89 -0.26,-0.25 0.15,-0.78 -0.2,-0.95 -12.76,-5.87 -4.98,-5.85 -7.92,-8.67 -14.71,-6.25 -0.66,-19.17 5.28,-11.42 14.47,-7.6 2.02,-0.78 1.57,-1.07 0.37,-0.75 0.34,-0.12 0.57,0.3 10.37,-4.22 0.44,0.12 0.38,-0.51 16.96,-6.88 0.16,-0.35 1.49,-0.18 1.07,-0.69 0.68,-1.01 1.39,-0.06 0.56,0.79 2.46,1.17 0.12,-0.22 0.62,0.19 0.42,1.14 0.72,0.04 1.01,0.81 0.08,1.2 0.72,0.55 0.38,1.5 2.83,0.78 1.14,0.94 0.36,0.79 1.01,0.09 1.16,1.64 0.51,0.12 0.12,0.38 0.65,0 0.4,0.86 0.95,0.87 0.35,1.02 0.6,0.13 0.12,0.41 1.19,0.56 -0.33,0.36 0.28,0.77 0.62,-0.04 0.62,0.55 -0.11,0.26 0.68,0.13 -0.32,0.3 1.39,0.52 0.99,0.86 0.37,-0.11 1.61,0.53 0.02,-0.56 0.5,-0.22 -0.04,-0.23 0.88,0.14 0.5,-0.55 0.29,0.58 0.21,-0.3 0.4,0.18 0.37,-0.21 0.89,0.31 0.18,-0.25 0.03,0.41 0.85,0 -0.1,-0.37 0.19,-0.09 0.51,0.52 0.66,0.13 -0.04,-0.19 0.6,0.34 1.43,-0.52 0.23,-0.61 1.29,0.49 0.14,-0.47 0.39,0.07 0.38,-0.33 1.39,0.91 1.09,-0.04 0.07,-0.46 0.54,0.14 0.81,-0.24 0.33,0.27 0.42,-0.19 0.27,0.21 0.19,-0.46 0.65,0.02 0.3,-0.38 0.37,0.39 -0.11,0.34 0.4,0.1 0.52,-0.33 0.28,-0.75 1.32,-0.66 0.72,0.48 0.22,0.45 3.15,-0.42 z"
              title="Mandera"
              id="KE-24"
              className={selectedCounty === "mandera" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Marsabit (MRS)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Marsabit_County.png"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 66 923 km<sup>2</sup>
                </p>
                <p>Population: 459 785</p>
                <p>Capital: Marsabit</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 122.52705,56.16063 0,0 10.36,0.29 0.8,-0.36 0.96,0.38 16.19,0.36 4.54,-0.55 1.03,0.03 0.97,0.68 1.07,0.02 9.35,-0.49 2.05,1.04 1.71,0.39 2.87,1.23 -0.01,0.31 1.53,0.15 1.1,1 0.27,-0.13 0.65,0.49 0.67,-0.8 0.65,0.62 0.24,-0.07 0.98,1.66 0.74,-0.09 0.73,0.33 1.32,2.05 1.05,0.78 0.34,-0.1 16.14,10.56 0.18,-0.1 19.61,13.95 8.68,5.79 4.07,2.25 2.53,2.58 5.4,4.78 0.41,-0.32 2.61,-0.54 15.24,1.04 4.27,-1.41 -0.01,-0.75 -0.37,-0.53 1.06,-0.27 0.72,0.55 0.59,1.41 1.08,0.8 1.33,0.07 0.69,-0.44 3.09,1.16 0.62,-0.97 -0.23,-0.64 0.57,-0.27 0.32,0.16 1.48,2.96 10.9,3.42 3.1,-0.17 -0.03,-0.58 0.52,-0.28 0.67,0.15 0.08,0.24 1.13,-0.23 0.25,-0.31 0.31,0.46 0.58,0.26 0.16,-0.66 0.57,0 0.3,-0.26 1.01,0.4 1.34,-0.57 0.03,-0.49 0.5,0.01 1.02,0.98 1.46,0.66 1.2,0.09 -0.03,0.52 1.57,0.66 0.6,-0.2 0.17,0.8 1.95,-0.17 2.33,0.61 1.38,-0.46 1.48,0.49 -0.77,0.92 -0.28,0.87 0.12,0.8 0.67,1.14 0.84,6.76 0.58,0.65 0.19,1.26 0.29,10.61 -1.3,0.99 -1.98,1 -2.28,2.26 -0.08,0.39 -2.63,1.84 -3.13,0.23 -0.56,0.81 -0.8,0.42 -0.67,2.75 -2.67,0.06 0.05,8.28 -0.77,0.64 -0.24,1.27 -0.71,0.82 0.43,0.79 -3.81,6.25 -5.04,1.39 0.78,3.68 1.47,3.75 0.39,2.29 -0.19,1.54 0.27,1.71 -0.58,1.82 0.7,3.96 -0.14,3.07 1.05,3.15 0.48,0.5 -33.13,19.23 -2.48,10.51 -22.55,17.99 0.31,-7.1 -5.63,-4.12 -0.54,1.9 -0.96,0.29 -0.51,-0.12 -1.34,0.5 -0.66,-0.31 -0.52,0.56 -0.26,-0.24 -1.19,0.03 -0.62,0.34 -1.53,0.01 -1.51,0.48 -0.55,-0.24 -0.95,0.45 -0.25,-0.32 -1.33,0.98 -0.41,0 -0.06,0.39 -0.84,0.04 -0.5,-0.88 -0.6,1.33 -0.46,0.17 0.15,-0.32 -0.29,-0.51 -1.1,-0.94 -5.06,-9.04 -1.5,-1.89 -5.29,-8.85 -2.54,-1.33 -2.29,-6.48 -1.23,-0.23 -0.71,-1 -2.36,-1.73 -0.64,-1.64 -4.74,-1.38 -5.12,-0.11 -3.27,-2.28 -1.46,0.48 -0.49,-0.08 0.3,-2.3 -0.06,-2.36 -0.42,-0.03 0.15,-1.47 -0.7,-1.77 -0.35,-2.01 -1.78,-3.55 -1.27,-1.2 -4.97,-13.8 -2.43,0.43 -0.82,-0.22 0.2,1.91 -0.33,0.73 0.06,0.63 -0.81,-0.16 -0.76,0.72 -0.85,1.46 -0.53,0.37 -0.2,-0.28 -0.32,1.52 0.1,-1.08 -0.32,0.3 -0.62,-0.6 -0.24,0.92 -0.58,0.19 -1.03,-1.01 -0.34,0.39 -1.05,0.14 -0.39,0.44 -1.1,-0.42 -1.01,-2.51 0.33,-4.23 -0.33,-0.25 -0.56,-1.95 -1.18,-0.82 -1.22,-1.97 -1.1,-0.15 -0.86,-1.23 -0.25,-2.53 0.77,-1.56 -1.07,-0.83 -0.41,-0.93 -0.13,-1.5 -1.32,-2.16 -0.83,-2.12 -1.21,-1.37 -0.82,-0.12 -2.64,-1.38 -0.95,-0.24 -0.73,-0.95 -0.87,-3.29 -0.01,0.62 -0.4,0.3 -0.73,-0.44 -0.55,-0.1 -0.11,0.21 -1.77,-0.77 -3.29,0.08 0.17,-0.7 -0.44,0.3 0.02,-0.39 -0.33,0.03 1.01,-3.25 0,-2.06 0.43,-0.16 0.26,-0.57 -0.05,-2.62 -0.67,-1.27 0.68,-2.07 0.05,-1.55 -0.33,-0.41 -0.25,0.8 -0.67,-0.06 -1.05,-0.58 -2.19,-0.34 -1.31,-0.76 -0.08,-69.66 z"
              title="Marsabit"
              id="KE-25"
              className={selectedCounty === "marsabit" ? "map active" : "map"}
            />
          </Popover>
          <Popover
            title="Turkana (TRK)"
            content={
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Turkana_County.gif"
                  alt="flag"
                  width="200"
                />
                <p>
                  Area: 98 597 km<sup>2</sup>
                </p>
                <p>Population: 1 504 976</p>
                <p>Capital: Lodwar</p>
              </div>
            }
            trigger="hover"
          >
            <path
              d="m 107.96705,5.20063 0,0 0.55,-0.15 0.77,0.31 0.19,0.37 1.05,0.06 0.04,0.32 0.8,0.57 0.45,-0.09 0.05,0.72 -0.25,0.97 -0.36,0.06 -0.62,0.99 -0.71,0.58 -0.14,1.16 0.62,1.77 0.92,0.53 0.54,1.12 -0.13,1.45 -2.86,3.54 0.02,17.97 7.84,8.83 -0.6,2.53 0.29,2.09 6.1,5.26 0.08,69.66 1.31,0.76 2.19,0.34 1.05,0.58 0.67,0.06 0.25,-0.8 0.33,0.41 -0.05,1.55 -0.68,2.07 0.67,1.27 0.05,2.62 -0.26,0.57 -0.43,0.16 0,2.06 -1.01,3.25 0.33,-0.03 -0.02,0.39 0.44,-0.3 -0.17,0.7 3.29,-0.08 1.77,0.77 0.11,-0.21 0.55,0.1 0.73,0.44 0.4,-0.3 0.01,-0.62 0.87,3.29 0.73,0.95 4.51,1.84 1.19,1.39 0.75,2 1.3,2.13 0.15,1.53 0.41,0.93 1.07,0.8 -0.77,1.59 0.25,2.53 0.86,1.23 1.1,0.15 1.22,1.97 1.18,0.82 0.56,1.95 0.33,0.25 -0.33,4.23 0.88,2.38 1.23,0.55 0.39,-0.44 1.05,-0.14 0.35,-0.38 0.57,0.47 0,2.62 7.02,3.37 -0.05,1.49 -0.93,0.75 0.41,0.81 -0.27,0.58 0.13,0.76 -0.65,0.35 0.09,1.06 -1.13,0.36 -1.46,1.14 -1.14,0.55 -1.51,0.44 -0.01,-0.37 -0.87,0.92 -0.43,0.05 -0.45,1.42 -0.89,0.97 0.26,2.62 -0.71,0.53 -0.37,0.99 -0.25,0.06 0.08,1.34 -0.34,0.02 -0.06,0.27 0.16,0.75 -0.24,1.01 -0.47,0.41 -0.18,0.6 0.56,-0.58 -0.01,1.84 0.2,0.28 -0.32,1.14 0.14,0.46 -0.71,0.37 -0.04,0.51 -0.67,0.39 0.03,1.54 0.34,-0.2 0.29,0.38 -0.32,0.63 0.23,0.2 -0.13,0.4 -0.45,-0.06 0.12,0.57 0.33,0.57 0.59,0.04 -0.23,0.77 -0.4,0.03 0.21,0.3 -0.15,0.43 -0.35,0.1 0.25,0.2 -0.08,0.47 -0.51,-0.36 0.43,0.61 -0.1,0.26 0.47,-0.6 0.21,0.67 -0.65,0.37 0.3,0.14 -0.03,0.29 -0.74,0.55 -0.04,0.56 -0.32,0.23 0.09,0.51 -0.96,0.33 0.07,1.14 -0.42,0.31 0.05,0.51 -0.51,0.59 0.03,0.85 -0.48,1.2 0.2,0.44 -0.69,0.13 -0.38,-0.34 -0.37,0.16 -0.53,1.01 0.01,0.77 -1.22,1.34 -0.94,2.19 -0.49,0 -0.74,-1.44 -0.15,-0.9 0.31,-1.21 -0.45,-0.62 -0.52,0.45 0.13,0.9 -1.1,0.07 -0.05,-0.41 -2.3,2.05 -0.21,0.51 -0.13,1.78 0.22,0.79 -0.63,1.05 0.11,0.34 1.7,-0.34 1.69,1.78 0.46,0.16 1.92,-0.51 1.58,1.56 0.56,0.15 0.04,0.39 1.13,-0.22 0.44,0.79 0.34,-0.3 0.31,0.28 -0.47,1.7 -0.28,-0.02 -0.9,0.52 -0.14,0.46 -0.73,0.24 -0.07,0.63 -0.63,0.47 -0.25,0.55 -0.87,0.35 0.65,0.27 0.09,0.44 0.91,0.34 0.76,-0.56 0.29,0.09 -0.12,0.76 0.86,0.96 0.16,0.63 0,0.41 -0.41,0.19 -0.44,-0.58 -0.9,-0.33 -0.84,-0.69 -0.23,0.37 -0.53,-0.24 0.06,0.42 -0.28,0 -0.19,0.35 0.93,0.69 0.54,-0.47 0,0.74 0.47,0.57 -0.2,0.55 -0.23,0.03 -0.1,-0.34 -0.78,0.33 -0.27,0.38 0.14,1.49 -0.54,0.42 0.26,0.13 0.04,0.64 1.51,-0.77 1.35,0.78 -0.51,1.8 0.65,1.61 -0.42,1.54 0.38,0.75 -0.2,0.34 0.06,1.4 0.68,1.61 -0.02,0.98 0.31,0.05 0.05,1.04 -0.63,-0.11 -0.15,-1.11 -0.36,-0.15 0.34,1.04 -0.16,0.75 -1.42,1.96 -1.47,1.03 -0.37,-0.52 0.13,-1.16 -0.36,-0.36 -0.84,-0.08 -0.26,-0.43 -0.7,-0.15 -0.56,-1.55 -1.34,0.11 -8.17,-10.27 -4.42,0.08 -17.4,-28.29 -1.71,-0.39 -2.42,-2.06 -1.27,-0.06 -1.6,-0.93 -0.74,-0.78 -1.69,-0.52 -0.04,0.21 -0.53,-0.09 -0.89,-0.76 -1.07,0.39 -2.34,-0.86 -1.03,-0.1 -0.81,0.25 -0.28,-0.66 -0.8,-0.77 -0.53,-0.12 -0.02,-0.35 -0.22,0.09 -0.03,-0.45 -0.77,-0.28 0.33,-0.51 -0.29,-0.23 0.24,-0.55 -0.28,-0.66 -0.79,-0.16 -0.03,-0.28 -0.43,-0.11 -4.38,-4.4 0.39,-0.85 0.41,-0.24 -0.33,-1.04 0.09,-1.49 -0.52,-2.52 -2.34,-7.47 -1.53,-5.94 -1.54,-2.81 -0.57,-0.68 -1.66,-1.12 0.26,-1.57 -0.77,-1.91 0.48,-1.68 -0.52,-1.19 -0.13,-1.45 0.27,-2.43 -2.89,-6.11 -0.79,-0.66 -1.62,-0.04 -1.57,5.39 0.32,1.48 -0.17,1.36 -0.81,1.52 -1.38,0.91 -2.15,-4.26 -0.28,-1.56 -0.6,-0.18 -0.43,0.96 -0.66,4.13 1.43,2.02 -0.04,0.55 -0.72,0.51 0.17,1.21 -2.32,-1.88 -1.74,-0.95 0.6,-0.29 0.09,-0.8 -0.32,-0.03 -0.88,-2.51 -1.1,-0.01 -0.89,-4.08 -0.23,-0.3 -0.78,0.21 -0.07,0.96 -0.62,0.11 -0.88,-0.72 -1.24,-2.13 -1.81,-2 -0.52,-1.62 -0.83,-0.79 0.51,-2.99 -0.98,-4.15 -0.39,-0.36 -0.6,0.17 -0.71,-1.68 -1.41,-0.58 -0.57,-0.73 -0.55,0.87 -2.24,-0.27 -0.76,-2.29 -2.35,-1.06 -0.62,-4.47 -0.62,-1.1 -0.11,-4.34 -0.93,-0.79 -0.67,-1.48 -1.96,-0.7 -1.06,0.55 -0.68,-1.33 -1.26,-0.55 -0.3,-0.48 -0.44,-5.74 -1.06,-3.45 -1.64,-1.61 0.05,-2.45 0.47,-0.22 0.53,-0.9 -0.13,-0.97 -1.46,-1.85 -0.13,-0.52 0.44,0.19 1.54,-0.16 1.57,-1.57 0.32,-3.43 -0.19,-1.89 0.56,-3.31 -0.47,-0.42 -2.95,-0.92 -0.2,-0.76 -1.7,-1.66 -0.93,-0.01 -1.68,0.45 -1.24,2.37 0.29,-1.51 -2.31,-2 -1.24,-2.11 -0.72,0.18 -0.23,0.37 -0.45,-0.57 -2.82,0.97 -0.37,-0.36 1.43,-0.54 -0.1,-0.69 -2,-0.28 -0.02,-0.4 0.55,-0.18 0.95,-1.22 2.63,0.05 0,-1.18 -0.57,-1.73 -2.29,0.09 -0.47,0.56 -2.25,-0.11 -2.25,0.6 0.16,-1.37 1.61,-0.94 0.85,-3.42 -1.62,-0.87 -1.4,-1.53 -1.12,-0.33 -0.12,-1.07 1.75,-0.55 0.15,-1.78 -0.64,-0.94 -1.02,-0.47 -0.75,-1.58 0.92,-1.22 -1.05,-2.08 -3.19,-2.53 21.32,-20.3 47.38,-40.17 5.56,-8.84 11.04,0.05 4.28,0.39 1.59,0.43 0.28,0.27 -0.15,0.22 0.61,0.49 0.25,-0.01 0.03,-0.3 0.64,-0.01 -0.03,0.5 0.24,0.16 -0.13,0.69 0.81,-0.11 1.12,-0.65 0.21,0.37 0.91,0.17 0.47,-0.3 0.56,0.25 0.53,-0.36 1.02,0.02 -0.05,0.34 0.39,-0.06 -0.02,0.82 0.3,-0.33 0.12,0.25 0.34,-0.27 0.11,0.31 0.48,-0.06 0.07,0.26 0.22,-0.24 0.26,0.3 -0.21,0.13 0.18,0.51 1.13,0.57 -0.09,-0.53 0.54,0.08 0.77,0.6 z"
              title="Turkana"
              id="KE-43"
              className={selectedCounty === "turkana" ? "map active" : "map"}
            />
          </Popover>
        </svg>
      </Wrapper>
    </Container>
  );
};
