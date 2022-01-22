# MiniTorch Module 4

<img src="https://minitorch.github.io/_images/match.png" width="100px">

* Docs: https://minitorch.github.io/

* Overview: https://minitorch.github.io/module4.html

This module requires `fast_ops.py`, `cuda_ops.py`, `scalar.py`, `tensor_functions.py`, `tensor_data.py`, `tensor_ops.py`, `operators.py`, `module.py`, and `autodiff.py` from Module 3.


Additionally you will need to install and download the MNist library.

(On Mac, this may require installing the `wget` command)

```
pip install python-mnist
mnist_get_data.sh
```


* Tests:

```
python run_tests.py
```

This assignment requires the following files from the previous assignments.

        minitorch/tensor_data.py minitorch/tensor_functions.py minitorch/tensor_ops.py minitorch/fast_ops.py minitorch/cuda_ops.py minitorch/operators.py minitorch/module.py minitorch/autodiff.py minitorch/scalar.py minitorch/module.py project/run_manual.py project/run_scalar.py project/run_tensor.py project/run_fast_tensor.py project/parallel_check.py tests/test_tensor_general.py

## MNIST Training

Hits 15 correct in second epoch

```
Epoch: 1/500, loss: 2.30303008896593, correct: 2
Epoch: 1/500, loss: 11.500264654360581, correct: 5
Epoch: 1/500, loss: 11.472034911086476, correct: 4
Epoch: 1/500, loss: 11.373958223838164, correct: 5
Epoch: 1/500, loss: 11.363313924752756, correct: 8
Epoch: 1/500, loss: 11.306907387153586, correct: 7
Epoch: 1/500, loss: 11.22602084391065, correct: 9
Epoch: 1/500, loss: 11.27218330445233, correct: 9
Epoch: 1/500, loss: 11.306424654387786, correct: 10
Epoch: 1/500, loss: 11.154624693769506, correct: 11
Epoch: 1/500, loss: 11.010260713602584, correct: 12
Epoch: 1/500, loss: 10.84416422896022, correct: 14
Epoch: 1/500, loss: 10.631516352611822, correct: 10
Epoch: 2/500, loss: 2.128793722768038, correct: 14
Epoch: 2/500, loss: 10.375594726290782, correct: 10
Epoch: 2/500, loss: 9.800940615900313, correct: 11
Epoch: 2/500, loss: 8.880927656254219, correct: 11
Epoch: 2/500, loss: 8.381231191781387, correct: 13
Epoch: 2/500, loss: 7.141037391079264, correct: 11
Epoch: 2/500, loss: 6.521135054997355, correct: 11
Epoch: 2/500, loss: 6.913793005051322, correct: 13
Epoch: 2/500, loss: 7.600567293896262, correct: 15
Epoch: 2/500, loss: 6.444498120441716, correct: 14
Epoch: 2/500, loss: 5.522396144304711, correct: 14
Epoch: 2/500, loss: 6.4674985521771555, correct: 14
Epoch: 2/500, loss: 6.5884880257761465, correct: 15
Epoch: 3/500, loss: 1.1391291250583189, correct: 13
Epoch: 3/500, loss: 6.979193108624927, correct: 10
Epoch: 3/500, loss: 5.777119449671117, correct: 13
Epoch: 3/500, loss: 5.271427116986079, correct: 12
Epoch: 3/500, loss: 4.75861066471557, correct: 13
Epoch: 3/500, loss: 3.8573464828653394, correct: 12
Epoch: 3/500, loss: 4.284773862916913, correct: 13
Epoch: 3/500, loss: 4.495891866211049, correct: 14
Epoch: 3/500, loss: 6.089423812141537, correct: 15
Epoch: 3/500, loss: 4.352771584390948, correct: 14
Epoch: 3/500, loss: 3.866095869402491, correct: 14
Epoch: 3/500, loss: 5.361993466581631, correct: 15
Epoch: 3/500, loss: 6.380430864276965, correct: 15
Epoch: 4/500, loss: 0.7883026849930337, correct: 14
Epoch: 4/500, loss: 6.254297666212127, correct: 12
Epoch: 4/500, loss: 5.222845969700857, correct: 13
Epoch: 4/500, loss: 4.7814332496734835, correct: 13
Epoch: 4/500, loss: 3.4871664073020896, correct: 13
Epoch: 4/500, loss: 3.231704292518371, correct: 15
Epoch: 4/500, loss: 4.24708843955484, correct: 13
Epoch: 4/500, loss: 4.646129060409814, correct: 13
Epoch: 4/500, loss: 6.121916527206096, correct: 12
Epoch: 4/500, loss: 5.163475414889611, correct: 14
Epoch: 4/500, loss: 4.684249529384923, correct: 14
Epoch: 4/500, loss: 6.454747678579887, correct: 10
Epoch: 4/500, loss: 8.543534137280371, correct: 11
Epoch: 5/500, loss: 1.4710352227240546, correct: 12
Epoch: 5/500, loss: 7.91703159054611, correct: 14
Epoch: 5/500, loss: 6.451308575924076, correct: 11
Epoch: 5/500, loss: 6.006833083082729, correct: 12
Epoch: 5/500, loss: 4.831462478717534, correct: 12
Epoch: 5/500, loss: 5.349988428274441, correct: 12
Epoch: 5/500, loss: 5.249689073477068, correct: 13
Epoch: 5/500, loss: 5.177765096143708, correct: 13
Epoch: 5/500, loss: 5.69473917319293, correct: 13
Epoch: 5/500, loss: 3.9038480319302655, correct: 14
Epoch: 5/500, loss: 4.4608984216843215, correct: 14
Epoch: 5/500, loss: 4.816128869676864, correct: 12
Epoch: 5/500, loss: 5.587037679228276, correct: 13
Epoch: 6/500, loss: 0.6855868945446306, correct: 13
Epoch: 6/500, loss: 4.631599951308616, correct: 13
Epoch: 6/500, loss: 4.5135066254199705, correct: 13
Epoch: 6/500, loss: 3.1430524266108617, correct: 12
Epoch: 6/500, loss: 3.006948387909554, correct: 13
Epoch: 6/500, loss: 3.9430821671475913, correct: 14
Epoch: 6/500, loss: 3.5088349907697145, correct: 13
Epoch: 6/500, loss: 4.507441333242116, correct: 13
Epoch: 6/500, loss: 4.96144660238903, correct: 13
Epoch: 6/500, loss: 3.1193267086792114, correct: 14
Epoch: 6/500, loss: 3.226091602535121, correct: 14
Epoch: 6/500, loss: 4.04966937748115, correct: 14
Epoch: 6/500, loss: 3.8099770353941835, correct: 14
Epoch: 7/500, loss: 0.3736182117146112, correct: 13
Epoch: 7/500, loss: 2.9431758898536495, correct: 13
Epoch: 7/500, loss: 2.560886121370218, correct: 14
Epoch: 7/500, loss: 2.2859122233762523, correct: 12
Epoch: 7/500, loss: 1.892054059702097, correct: 13
Epoch: 7/500, loss: 2.8832146209646896, correct: 12
Epoch: 7/500, loss: 2.414060351155578, correct: 12
Epoch: 7/500, loss: 2.941762771899108, correct: 13
Epoch: 7/500, loss: 3.652484158587055, correct: 13
Epoch: 7/500, loss: 2.3924717681274066, correct: 12
Epoch: 7/500, loss: 2.4349292547421615, correct: 14
Epoch: 7/500, loss: 3.143168073361588, correct: 14
Epoch: 7/500, loss: 2.809523521515322, correct: 13
Epoch: 8/500, loss: 0.25038853060958555, correct: 12
Epoch: 8/500, loss: 2.052538874908397, correct: 13
Epoch: 8/500, loss: 2.032526622490143, correct: 14
Epoch: 8/500, loss: 2.0039563341873077, correct: 13
Epoch: 8/500, loss: 1.3919217830919022, correct: 13
Epoch: 8/500, loss: 2.4608254633682525, correct: 11
Epoch: 8/500, loss: 2.125659360606534, correct: 12
Epoch: 8/500, loss: 2.2687057214170183, correct: 12
Epoch: 8/500, loss: 2.6604946180816773, correct: 12
Epoch: 8/500, loss: 1.894083691093098, correct: 13
Epoch: 8/500, loss: 1.9987184566646539, correct: 13
Epoch: 8/500, loss: 2.7876156325521557, correct: 13
Epoch: 8/500, loss: 2.4403544924956915, correct: 13
Epoch: 9/500, loss: 0.20806661084645578, correct: 12
Epoch: 9/500, loss: 1.6900937959878437, correct: 13
Epoch: 9/500, loss: 1.790241706623973, correct: 14
Epoch: 9/500, loss: 1.4961836150022692, correct: 14
Epoch: 9/500, loss: 1.2869174238432959, correct: 14
Epoch: 9/500, loss: 1.9721060150781202, correct: 11
Epoch: 9/500, loss: 1.9080211849813402, correct: 12
Epoch: 9/500, loss: 1.9411990027216937, correct: 12
Epoch: 9/500, loss: 1.9811844094106363, correct: 13
Epoch: 9/500, loss: 1.7093228682871418, correct: 12
Epoch: 9/500, loss: 1.7888422788724774, correct: 15
Epoch: 9/500, loss: 2.4832372532264655, correct: 13
Epoch: 9/500, loss: 2.183558481971364, correct: 13
Epoch: 10/500, loss: 0.18131177673759022, correct: 12
Epoch: 10/500, loss: 1.5149726108587358, correct: 13
Epoch: 10/500, loss: 1.6234394307185291, correct: 14
Epoch: 10/500, loss: 1.2818241307796203, correct: 14
Epoch: 10/500, loss: 1.3326749739840102, correct: 13
Epoch: 10/500, loss: 1.8188348781019494, correct: 11
Epoch: 10/500, loss: 1.7951299446572297, correct: 12
Epoch: 10/500, loss: 1.6898584847612552, correct: 12
Epoch: 10/500, loss: 1.7271411821741312, correct: 13
Epoch: 10/500, loss: 1.5200911114361344, correct: 13
Epoch: 10/500, loss: 1.6772848822367463, correct: 15
Epoch: 10/500, loss: 2.26080295796171, correct: 13
Epoch: 10/500, loss: 2.016145680767458, correct: 14
Epoch: 11/500, loss: 0.16113581424721216, correct: 12
Epoch: 11/500, loss: 1.433349609053088, correct: 13
Epoch: 11/500, loss: 1.509558118396018, correct: 14
Epoch: 11/500, loss: 1.171419499228055, correct: 14
Epoch: 11/500, loss: 1.1231742807119431, correct: 13
Epoch: 11/500, loss: 1.6515506979084527, correct: 14
Epoch: 11/500, loss: 1.6000635970813297, correct: 12
Epoch: 11/500, loss: 1.4815588947167848, correct: 13
Epoch: 11/500, loss: 1.489936974987335, correct: 14
Epoch: 11/500, loss: 1.1337408772516202, correct: 14
Epoch: 11/500, loss: 2.0198753136611804, correct: 15
Epoch: 11/500, loss: 2.1584153818996756, correct: 14
Epoch: 11/500, loss: 1.8934696671070268, correct: 14
Epoch: 12/500, loss: 0.13633326945872018, correct: 13
Epoch: 12/500, loss: 1.2939912294625486, correct: 13
Epoch: 12/500, loss: 1.4230585064343295, correct: 14
Epoch: 12/500, loss: 1.4143512793373756, correct: 14
Epoch: 12/500, loss: 1.462714913994503, correct: 13
Epoch: 12/500, loss: 1.7067920342462495, correct: 13
Epoch: 12/500, loss: 1.820276574459508, correct: 13
Epoch: 12/500, loss: 1.2387017952787727, correct: 14
Epoch: 12/500, loss: 1.2526612267737396, correct: 14
Epoch: 12/500, loss: 0.7501928385622805, correct: 14
Epoch: 12/500, loss: 2.0855075517197585, correct: 15
Epoch: 12/500, loss: 2.1092961837880937, correct: 14
Epoch: 12/500, loss: 1.9057140263322245, correct: 14
Epoch: 13/500, loss: 0.1514700631535166, correct: 14
Epoch: 13/500, loss: 1.2728198004785405, correct: 14
Epoch: 13/500, loss: 1.3226502537984914, correct: 14
Epoch: 13/500, loss: 1.3738792369692454, correct: 14
Epoch: 13/500, loss: 1.2022998103220952, correct: 13
Epoch: 13/500, loss: 1.5781005728700452, correct: 13
Epoch: 13/500, loss: 1.59071386750546, correct: 14
Epoch: 13/500, loss: 1.2835082816742287, correct: 14
Epoch: 13/500, loss: 1.2415898034184654, correct: 14
Epoch: 13/500, loss: 0.7187001296289217, correct: 14
Epoch: 13/500, loss: 1.548943500207856, correct: 15
Epoch: 13/500, loss: 1.9556883005227212, correct: 13
Epoch: 13/500, loss: 1.7964764213984263, correct: 14
Epoch: 14/500, loss: 0.12419230842190343, correct: 14
Epoch: 14/500, loss: 1.179174494141161, correct: 14
Epoch: 14/500, loss: 1.2073806656750643, correct: 14
Epoch: 14/500, loss: 1.2881223566975046, correct: 14
Epoch: 14/500, loss: 1.0402970514787324, correct: 14
Epoch: 14/500, loss: 1.3980623520853115, correct: 13
Epoch: 14/500, loss: 1.3505022087272671, correct: 14
Epoch: 14/500, loss: 1.253542023157047, correct: 14
Epoch: 14/500, loss: 1.142773112020963, correct: 14
Epoch: 14/500, loss: 0.6973744122609453, correct: 14
Epoch: 14/500, loss: 1.465180267158385, correct: 14
Epoch: 14/500, loss: 1.966339253369354, correct: 14
Epoch: 14/500, loss: 1.7169674594613729, correct: 14
Epoch: 15/500, loss: 0.11324076099543265, correct: 14
Epoch: 15/500, loss: 1.1541278921502416, correct: 14
Epoch: 15/500, loss: 1.125804858174086, correct: 14
Epoch: 15/500, loss: 1.221869623362473, correct: 14
Epoch: 15/500, loss: 0.935162484238609, correct: 14
Epoch: 15/500, loss: 1.2906690488925667, correct: 13
Epoch: 15/500, loss: 1.1896088619288876, correct: 14
Epoch: 15/500, loss: 1.144919110748376, correct: 14
Epoch: 15/500, loss: 1.0935857897244166, correct: 14
Epoch: 15/500, loss: 0.8261728516277491, correct: 14
Epoch: 15/500, loss: 1.702844902164489, correct: 14
Epoch: 15/500, loss: 2.0990093458179455, correct: 14
Epoch: 15/500, loss: 1.7261670510462686, correct: 14
Epoch: 16/500, loss: 0.10985761652602266, correct: 14
Epoch: 16/500, loss: 1.1916023037276888, correct: 14
Epoch: 16/500, loss: 1.110113456061992, correct: 14
Epoch: 16/500, loss: 1.142898286498384, correct: 14
Epoch: 16/500, loss: 0.8667419952380533, correct: 14
Epoch: 16/500, loss: 1.1353087552256524, correct: 14
Epoch: 16/500, loss: 1.0833779458907769, correct: 14
Epoch: 16/500, loss: 0.9701032710610915, correct: 14
Epoch: 16/500, loss: 1.1412255734503451, correct: 14
Epoch: 16/500, loss: 1.1626503303466926, correct: 14
Epoch: 16/500, loss: 1.3904941380330786, correct: 14
Epoch: 16/500, loss: 2.249715391560085, correct: 14
Epoch: 16/500, loss: 1.6668986180506213, correct: 14
Epoch: 17/500, loss: 0.1032005947228232, correct: 14
Epoch: 17/500, loss: 1.185554493939102, correct: 14
Epoch: 17/500, loss: 1.0807850955720892, correct: 14
Epoch: 17/500, loss: 1.1111468823941464, correct: 14
Epoch: 17/500, loss: 0.8174990353718447, correct: 14
Epoch: 17/500, loss: 1.0337928705121275, correct: 14
Epoch: 17/500, loss: 1.0140199276530288, correct: 14
Epoch: 17/500, loss: 0.7942494095199966, correct: 14
Epoch: 17/500, loss: 1.076969183363076, correct: 14
Epoch: 17/500, loss: 0.9930535806730159, correct: 14
Epoch: 17/500, loss: 1.351873218379536, correct: 14
Epoch: 17/500, loss: 2.5600478451667734, correct: 14
Epoch: 17/500, loss: 1.5932007040428247, correct: 14
Epoch: 18/500, loss: 0.08992770363495944, correct: 14
Epoch: 18/500, loss: 1.1622738051483321, correct: 14
Epoch: 18/500, loss: 1.0606692717866815, correct: 14
Epoch: 18/500, loss: 1.0890212635719958, correct: 14
Epoch: 18/500, loss: 0.8267391474580108, correct: 14
Epoch: 18/500, loss: 0.998309929859618, correct: 14
Epoch: 18/500, loss: 0.9685414983025374, correct: 14
Epoch: 18/500, loss: 0.7392918760640677, correct: 14
Epoch: 18/500, loss: 1.1268789957118317, correct: 14
Epoch: 18/500, loss: 0.632387659724285, correct: 14
Epoch: 18/500, loss: 0.9066937366954777, correct: 14
Epoch: 18/500, loss: 1.6103973732436483, correct: 14
Epoch: 18/500, loss: 1.4887292108271035, correct: 14
Epoch: 19/500, loss: 0.0565152256513034, correct: 14
Epoch: 19/500, loss: 0.9699973035422077, correct: 14
Epoch: 19/500, loss: 0.9105702276705074, correct: 14
Epoch: 19/500, loss: 0.9686317717512973, correct: 14
Epoch: 19/500, loss: 0.7864628960406194, correct: 14
Epoch: 19/500, loss: 0.9099636173755447, correct: 14
Epoch: 19/500, loss: 0.8668201850195323, correct: 14
Epoch: 19/500, loss: 0.6500375121608739, correct: 14
Epoch: 19/500, loss: 1.0884177699644244, correct: 14
Epoch: 19/500, loss: 0.5420384989344372, correct: 14
Epoch: 19/500, loss: 0.658868399100789, correct: 14
Epoch: 19/500, loss: 1.2768789599106394, correct: 14
Epoch: 19/500, loss: 1.3700090653750139, correct: 14
Epoch: 20/500, loss: 0.053306194893261244, correct: 14
Epoch: 20/500, loss: 0.8479179802075055, correct: 14
Epoch: 20/500, loss: 0.8139894948230917, correct: 14
Epoch: 20/500, loss: 0.8871808427776773, correct: 14
Epoch: 20/500, loss: 0.7614337649698418, correct: 14
Epoch: 20/500, loss: 0.8081327213078968, correct: 14
Epoch: 20/500, loss: 0.7424780059713132, correct: 14
Epoch: 20/500, loss: 0.6142710366572424, correct: 14
Epoch: 20/500, loss: 1.1131048386984455, correct: 14
Epoch: 20/500, loss: 0.5775958272489731, correct: 14
Epoch: 20/500, loss: 0.6743755085641754, correct: 14
Epoch: 20/500, loss: 1.2456756030949454, correct: 14
Epoch: 20/500, loss: 1.326129767510424, correct: 14
```

## Sentiment Training

```
Epoch 1, loss 31.370632269930923, train accuracy: 50.00%
Validation accuracy: 52.00%
Best Valid accuracy: 52.00%
Epoch 2, loss 31.257959013881553, train accuracy: 52.22%
Validation accuracy: 48.00%
Best Valid accuracy: 52.00%
Epoch 3, loss 30.968461237302336, train accuracy: 54.22%
Validation accuracy: 48.00%
Best Valid accuracy: 52.00%
Epoch 4, loss 30.737005636207538, train accuracy: 54.22%
Validation accuracy: 59.00%
Best Valid accuracy: 59.00%
Epoch 5, loss 30.19377331719257, train accuracy: 59.78%
Validation accuracy: 59.00%
Best Valid accuracy: 59.00%
Epoch 6, loss 29.88743127468924, train accuracy: 59.78%
Validation accuracy: 53.00%
Best Valid accuracy: 59.00%
Epoch 7, loss 29.205254950336542, train accuracy: 63.33%
Validation accuracy: 49.00%
Best Valid accuracy: 59.00%
Epoch 8, loss 28.933266725815063, train accuracy: 63.33%
Validation accuracy: 61.00%
Best Valid accuracy: 61.00%
Epoch 9, loss 27.922183972462232, train accuracy: 69.33%
Validation accuracy: 55.00%
Best Valid accuracy: 61.00%
Epoch 10, loss 27.352452960038438, train accuracy: 69.56%
Validation accuracy: 66.00%
Best Valid accuracy: 66.00%
Epoch 11, loss 26.468299802927604, train accuracy: 71.78%
Validation accuracy: 68.00%
Best Valid accuracy: 68.00%
Epoch 12, loss 25.548796425808234, train accuracy: 72.00%
Validation accuracy: 68.00%
Best Valid accuracy: 68.00%
Epoch 13, loss 24.620952380736366, train accuracy: 74.00%
Validation accuracy: 70.00%
Best Valid accuracy: 70.00%
Epoch 14, loss 23.809031845977522, train accuracy: 73.78%
Validation accuracy: 71.00%
Best Valid accuracy: 71.00%
Epoch 15, loss 22.627042010820997, train accuracy: 77.78%
Validation accuracy: 73.00%
Best Valid accuracy: 73.00%
Epoch 16, loss 21.34450046849864, train accuracy: 79.56%
Validation accuracy: 68.00%
Best Valid accuracy: 73.00%
Epoch 17, loss 20.59783730619089, train accuracy: 77.78%
Validation accuracy: 75.00%
Best Valid accuracy: 75.00%
Epoch 18, loss 20.32128486919083, train accuracy: 79.78%
Validation accuracy: 73.00%
Best Valid accuracy: 75.00%
Epoch 19, loss 20.098418480676706, train accuracy: 75.56%
Validation accuracy: 71.00%
Best Valid accuracy: 75.00%
Epoch 20, loss 18.276778410918926, train accuracy: 80.89%
Validation accuracy: 67.00%
Best Valid accuracy: 75.00%
```
