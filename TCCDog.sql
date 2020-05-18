-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.6.13 - MySQL Community Server (GPL)
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              10.1.0.5464
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para walkdos
CREATE DATABASE IF NOT EXISTS `walkdos` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `walkdos`;

-- Copiando estrutura para tabela walkdos.agenda
CREATE TABLE IF NOT EXISTS `agenda` (
  `idCliente` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(50) NOT NULL,
  `nomeAnimal` varchar(50) DEFAULT NULL,
  `dia` date DEFAULT NULL,
  `inicio` time DEFAULT NULL,
  `termino` time DEFAULT NULL,
  `servico` varchar(50) DEFAULT NULL,
  `valor` varchar(50) DEFAULT NULL,
  `idCadastro` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCliente`),
  KEY `idCadastro` (`idCadastro`),
  CONSTRAINT `fk_Agenda` FOREIGN KEY (`idCadastro`) REFERENCES `cadastro` (`idCadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.
-- Copiando estrutura para tabela walkdos.cadastro
CREATE TABLE IF NOT EXISTS `cadastro` (
  `idCadastro` int(11) NOT NULL AUTO_INCREMENT,
  `usuarios` varchar(45) NOT NULL,
  `login` varchar(45) NOT NULL,
  `senha` varchar(45) NOT NULL,
  PRIMARY KEY (`idCadastro`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.
-- Copiando estrutura para tabela walkdos.caes
CREATE TABLE IF NOT EXISTS `caes` (
  `idCaes` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` varchar(50) DEFAULT '0',
  `email` varchar(50) DEFAULT '0',
  `fone` varchar(50) DEFAULT '0',
  `cep` int(11) DEFAULT '0',
  `cidade` varchar(50) DEFAULT '0',
  `estado` varchar(50) DEFAULT '0',
  `rua` varchar(50) DEFAULT '0',
  `nmr` int(11) DEFAULT '0',
  `nome` varchar(50) DEFAULT '0',
  `procedencia` varchar(50) DEFAULT '0',
  `datNasc` date DEFAULT '0000-00-00',
  `datEntrada` date DEFAULT '0000-00-00',
  `sexo` varchar(50) DEFAULT '0',
  `cor` varchar(50) DEFAULT '0',
  `raca` varchar(50) DEFAULT '0',
  `vacina` varchar(50) DEFAULT '0',
  PRIMARY KEY (`idCaes`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.
-- Copiando estrutura para tabela walkdos.servico
CREATE TABLE IF NOT EXISTS `servico` (
  `idServico` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `valor` varchar(50) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `observacao` varchar(50) DEFAULT NULL,
  `idCadastro` int(11) DEFAULT NULL,
  PRIMARY KEY (`idServico`),
  KEY `idCadastro` (`idCadastro`),
  CONSTRAINT `fk_Servico` FOREIGN KEY (`idCadastro`) REFERENCES `cadastro` (`idCadastro`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Exportação de dados foi desmarcado.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
