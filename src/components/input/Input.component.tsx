import { FC, ReactElement, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Text,
} from '@chakra-ui/react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';

interface Props extends InputProps {
  /**
   * Función de registro proporcionada por useForm() de React Hook Form.
   */
  register: UseFormRegister<any>;

  /**
   * Nombre del campo en el formulario.
   */
  name: string;

  /**
   * Mensaje de error a mostrar debajo del campo si es necesario.
   */
  error?: string;

  /**
   * Texto de marcador de posición para el campo.
   */
  placeholder?: string;

  /**
   * Icono que se mostrara a un lado del input
   */
  icon?: ReactElement | null;
}

/**
 * Componente de entrada personalizado que puede manejar entradas de texto y contraseñas.
 */
const InputComponent: FC<Props> = ({
  register,
  name,
  error,
  isRequired,
  placeholder = '',
  type = 'text',
  icon,
  ...props
}) => {
  /**
   * Estado que indica si la contraseña se muestra o no.
   */
  const [show, setShow] = useState<boolean>(false);

  /**
   * Manejador de clic para el botón de mostrar/ocultar contraseña.
   */
  const handleClick = () => setShow(!show);

  return (
    <FormControl
      variant="floating"
      isRequired={isRequired}
      isInvalid={!!error}
    >
      {type !== 'password' ? (<>
        <Flex
          gap="5px"
          alignItems="center"
        >
          {icon && <Text
            fontSize="2.5rem"
            color="#3e6913"
          >
            {icon}
          </Text>}
          <Input
            type={type}
            placeholder=" "
            focusBorderColor={error ? 'red.500' : '#3e6913'}
            border="1px solid #3e6913"
            rounded="full"
            backgroundColor="#3e691350"
            placeholder={placeholder}
            _placeholder={{
              color: '#3e6913',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
            {...register(name)}
            {...props}
          />
        </Flex>
      </>) : (
        <Flex
          gap="5px"
          alignItems="center"
        >
          {icon && <Text
            fontSize="2.5rem"
            color="#3e6913"
          >
            {icon}
          </Text>}
          <Input
            type={show ? 'text' : 'password'}
            placeholder=" "
            focusBorderColor={error ? 'red.500' : '#3e6913'}
            border="1px solid #3e6913"
            rounded="full"
            backgroundColor="#3e691350"
            placeholder={placeholder}
            _placeholder={{
              color: '#3e6913',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
            {...register(name)}
            {...props}
          />
        </Flex>
      )}
      <FormErrorMessage>{error}</FormErrorMessage>

      {type === 'password' && (
        <Button
          h="1.75rem"
          size="sm"
          fontSize="xl"
          position="absolute"
          right="6px"
          top="6px"
          zIndex="2"
          rounded="full"
          backgroundColor="#3e6913"
          color="gray.200"
          _hover={{ opacity: 0.8 }}
          _active={{ opacity: 1 }}
          onClick={handleClick}
        >
          {show ? <AiFillEyeInvisible /> : <AiFillEye />}
        </Button>
      )}
    </FormControl>
  );
}

export default InputComponent;
