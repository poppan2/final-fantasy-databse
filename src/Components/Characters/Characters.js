import React from "react";
import { Link } from "react-router-dom";
import "./Characters.css";
import defaultImg from './moogle.jpg'

const Characters = (props) => {
  const FFArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy";
  });
  const FFBEArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy BE";
  });
  const FFIIArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy II";
  });
  const FFIIIArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy III";
  });
  const FFIVArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy IV";
  });
  const FFVArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy V";
  });
  const FFVIArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy VI";
  });
  const FFVIIArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy VII";
  });
  const FFVIIIArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy VIII";
  });
  const FFIXArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy IX";
  });
  const FFXArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy X";
  });
  const FFXIIArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy XII";
  });
  const FFXIIIArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy XIII";
  });
  const FFXVArr = props.characters.filter((series) => {
    return series.origin === "Final Fantasy XV";
  });
  const FFChars = FFArr.map((char) => {
    const imgSrc = char && char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFBEChars = FFBEArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFIIChars = FFIIArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFIIIChars = FFIIIArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFIVChars = FFIVArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFVChars = FFVArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFVIChars = FFVIArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFVIIChars = FFVIIArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFVIIIChars = FFVIIIArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFIXChars = FFIXArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFXChars = FFXArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFXIIChars = FFXIIArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFXIIIChars = FFXIIIArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });
  const FFXVChars = FFXVArr.map((char) => {
    const imgSrc = char.pictures[0]? char.pictures[0].url : defaultImg;
    return (
      <Link to={"/characters/" + char.id}>
        <div className="ff-character-info">
          <img alt="ff-character" src={imgSrc} />
          <li key={char.id}>{char.name}</li>
        </div>
      </Link>
    );
  });

  return (
    <div className="FF-characters">
      <div className="ff-character">
        <h2>FF Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFBE Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFBEChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFII Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFIIChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFIII Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFIIIChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFIV Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFIVChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFV Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFVChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFVI Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFVIChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFVII Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFVIIChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFVIII Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFVIIIChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFIX Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFIXChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFX Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFXChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFXII Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFXIIChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFXIII Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFXIIIChars}</ul>
        </div>
      </div>
      <div className="ff-character">
        <h2>FFXV Characters </h2>
        <div className="ff-character-lists">
          <ul>{FFXVChars}</ul>
        </div>
      </div>
    </div>
  );
};

export default Characters;
