import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Slot.module.css';
import ItemMachine from './ItemMachine/index';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Image from 'next/image';

const list = [
  { img: '/img/slot/TROME-CostumerJourney-Icono-Cereza.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-Corazon.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-Corona.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-Diamante.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-Espada.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-T.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-Estrella.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-Sandia.png' },
  { img: '/img/slot/TROME-CostumerJourney-Icono-Trebol.png' }
];

const Slot = ({ systemData, viewGame }) => {
  const [start, setStart] = useState(true);
  const [machineOne, setMachineOne] = useState(null);
  const [machineTwo, setMachineTwo] = useState(null);
  const [machineThree, setMachineThree] = useState(null);
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const container = useRef();

  useEffect(() => {
    if (container) {
      setWidth(container.current.clientWidth);
      setHeight(container.current.clientHeight);
    }
  }, [container]);

  useEffect(() => {
    return () => {
      if (document.querySelector('#machineOne')) {
        setMachineOne(
          // eslint-disable-next-line no-undef
          new SlotMachine(document.querySelector('#machineOne'), {
            active: 0,
            delay: 500
          })
        );
        setMachineTwo(
          // eslint-disable-next-line no-undef
          new SlotMachine(document.querySelector('#machineTwo'), {
            active: 3,
            delay: 500
          })
        );
        setMachineThree(
          // eslint-disable-next-line no-undef
          new SlotMachine(document.querySelector('#machineThree'), {
            active: 5,
            delay: 500
          })
        );
      }
    };
  }, []);

  const handleSubmit = () => {
    setStart(!start);
    if (start) {
      machineOne.shuffle(99999);
      machineTwo.shuffle(99999);
      machineThree.shuffle(99999);
    } else {
      setLoading(true);
      setTimeout(() => {
        const result = [
          Math.floor(Math.random() * (9 - 1)) + 1,
          Math.floor(Math.random() * (9 - 1)) + 1,
          Math.floor(Math.random() * (9 - 1)) + 1
        ];
        machineOne.stop(result[0]);
        machineTwo.stop(result[1]);
        machineThree.stop(result[2]);
        setTimeout(() => {
          viewGame([result[0], result[1], result[2]]);
        }, 2000);
      }, 1000);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          height: '40vh',
          width: '100%'
        }}
        ref={container}
      >
        <Image
          src={'/img/machine2.svg'}
          alt="img-slot-t"
          width={width}
          height={height}
        />
      </Box>
      <Box
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <div style={{ width: 320, display: 'flex', flexDirection: 'row' }}>
          <div className={styles.container}>
            <div className={styles.containerOne}>
              <div
                id={'machineOne'}
                style={{ height: 100, borderRight: '8px solid #ffe608' }}
              >
                {list.map((item, index) => (
                  <ItemMachine key={index} src={item.img} />
                ))}
              </div>
              <div id={'machineTwo'} style={{ height: 100 }}>
                {list.map((item, index) => (
                  <ItemMachine key={index} src={item.img} />
                ))}
              </div>
              <div
                id={'machineThree'}
                style={{
                  height: 100,
                  borderLeft: '8px solid #ffe608'
                }}
              >
                {list.map((item, index) => (
                  <ItemMachine key={index} src={item.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Box>
      <div className={styles.containerBtn}>
        <Button
          variant="contained"
          disabled={loading}
          style={{
            fontSize: '2rem',
            paddingLeft: 40,
            paddingRight: 40,
            borderRadius: 80
          }}
          onClick={handleSubmit}
        >
          {start ? systemData.game.buttonJ : systemData.game.buttonD}
        </Button>
      </div>
    </div>
  );
};

export default Slot;
